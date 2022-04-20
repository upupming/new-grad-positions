import { PositionRefined, positions, Position, PositionType } from './data'
import puppeteer from 'puppeteer-core'
import { Launcher } from 'chrome-launcher'
import { promises as fs } from 'fs'
import path from 'path'
import { compare } from 'pinyin'

async function main () {
  const browser = await puppeteer.launch({
    executablePath: Launcher.getInstallations()[0]
  })

  try {
    await checkIntegrity(positions)

    const positionsRefined: PositionRefined[] = await preprocessData()

    const outFile = path.join(__dirname, 'data-processed.json')
    await fs.writeFile(outFile, JSON.stringify(positionsRefined, null, 2))
    console.log(`Successfully wrote processed data to ${path.relative(process.cwd(), outFile)}`)

    await generateReadme(positionsRefined)
  } finally {
    await browser.close()
  }

  async function getTitleFromUrl (url: string): Promise<string> {
    const page = await browser.newPage()
    await page.goto(url, {
      waitUntil: 'domcontentloaded'
    })
    const title = await page.waitForFunction("document.querySelector('title')?.innerText")

    // const title = await page.evaluate(() => document.querySelector('title')?.innerText)

    if (title == null) {
      throw new Error(`Failed to get title from url: ${url}`)
    }
    return (await title.jsonValue())
  }

  async function checkIntegrity (positions: Position[]) {
    const s = new Set()
    const getHash = (position: Position) => {
      return `${position.company.name}_${position.graduationYear}_${position.type}`
    }
    for (const position of positions) {
      const hash = getHash(position)
      if (s.has(hash)) {
        throw new Error(`Duplicate position: ${JSON.stringify(position)}`)
      }
      s.add(hash)
    }
    console.log('Successfully checked integrity')
  }

  async function preprocessData () {
    const refinedPositions: PositionRefined[] = []
    for await (const position of positions) {
      const refinedPosition = {
        ...position,
        announcement: {
          ...position.announcement,
          title: await getTitleFromUrl(position.announcement.url)
        }
      }
      refinedPositions.push(refinedPosition)
    }

    // sort by company name
    refinedPositions.sort((a, b) => compare(a.company.name, b.company.name))
    console.log('Successfully preprocessed data')
    return refinedPositions
  }

  async function groupByType (positions: PositionRefined[]) {
    const grouped: { [type in PositionType]?: PositionRefined[] } = {}
    for (const position of positions) {
      const type = position.type
      if (grouped[type] == null) {
        grouped[type] = []
      }
      grouped[type]?.push(position)
    }
    return grouped
  }

  async function groupByYear (positions: PositionRefined[]) {
    const positionsByYear: { [year: number]: PositionRefined[] } = {}
    for (const position of positions) {
      const year = position.graduationYear
      if (!(year in positionsByYear)) {
        positionsByYear[year] = []
      }
      positionsByYear[year].push(position)
    }
    return positionsByYear
  }

  async function generateReadmeForYearAndType (year: number, type: PositionType, positions: PositionRefined[]) {
    return `
## ${year} 届${type}招聘

|公司名称|招聘类型|官方公告|日期|
|-|-|-|-|
${positions.map(position => `
|[${markdownEscape(position.company.name)}](${markdownEscape(position.company.website)})|${markdownEscape(position.type)}|[${markdownEscape(position.announcement.title)}](${markdownEscape(position.announcement.url)})|${markdownEscape(position.announcement.date)}|
`.trim()).join('\n')}
    `.trim()
  }

  async function generateReadme (positionsRefined: PositionRefined[]) {
    const banner = `
# new-grad-positions

[![LICENSE](https://img.shields.io/github/license/upupming/new-grad-positions?style=flat-square)](https://github.com/upupming/new-grad-positions/blob/main/LICENSE) [![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/upupming/new-grad-positions/blob/main/src/data.ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

本项目旨在收集互联网公司校招和实习的最新官方招聘信息，帮助在校生消除信息不对称带来的劣势。欢迎贡献 👏🏻，可以直接修改 [src/data.ts](src/data.ts) 来增加数据并提交 PR。
`.trim()

    let content = ''
    const groupedByYear = await groupByYear(positionsRefined)
    for (const [year, positions] of Object.entries(groupedByYear)) {
      const groupedByType = await groupByType(positions)
      for (const [type, positions] of Object.entries(groupedByType)) {
        content += await generateReadmeForYearAndType(Number(year), type as PositionType, positions) + '\n'
      }
    }

    const footer = `
Last updated: ${getTimeStampAtTimeZone()}
`.trim()

    await fs.writeFile(path.join(__dirname, '../README.md'), `
${banner}

${content.trim()}

${footer}
    `.trim() + '\n')
    console.log('Successfully generated README.md')
  }

  // https://github.com/kemitchell/markdown-escape.js/blob/master/index.js
  function markdownEscape (string: string, skips: string[] = []) {
    const replacements: Array<[RegExp, string, string]> = [
      [/\*/g, '\\*', 'asterisks'],
      [/#/g, '\\#', 'number signs'],
      [/\//g, '\\/', 'slashes'],
      [/\(/g, '\\(', 'parentheses'],
      [/\)/g, '\\)', 'parentheses'],
      [/\[/g, '\\[', 'square brackets'],
      [/\]/g, '\\]', 'square brackets'],
      [/</g, '&lt;', 'angle brackets'],
      [/>/g, '&gt;', 'angle brackets'],
      [/_/g, '\\_', 'underscores'],
      // https://www.markdownguide.org/basic-syntax/#characters-you-can-escape
      [/\|/g, '\\|', 'pipe']
    ]

    return replacements.reduce(function (string, replacement) {
      const name = replacement[2]
      return skips.includes(name)
        ? string
        : string.replace(replacement[0], replacement[1])
    }, string)
  }

  function getTimeStampAtTimeZone (utcOffset = 8) {
    const date = new Date()
    date.setHours(date.getHours() + utcOffset)
    const YYYY = date.getFullYear()
    const MM = String(date.getUTCMonth() + 1).padStart(2, '0')
    const dd = String(date.getUTCDate()).padStart(2, '0')
    const hh = String(date.getUTCHours()).padStart(2, '0')
    const mm = String(date.getUTCMinutes()).padStart(2, '0')
    const ss = String(date.getUTCSeconds()).padStart(2, '0')
    const timestamp = [YYYY, MM, dd].join('-') + ' ' + [hh, mm, ss].join(':')
    return timestamp
  }
}

void main()
