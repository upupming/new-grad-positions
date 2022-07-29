import { PositionRefined, positions, Position, PositionType, ProcessedData } from './data'
import puppeteer, { JSHandle } from 'puppeteer-core'
import { Launcher } from 'chrome-launcher'
import { promises as fs } from 'fs'
import path from 'path'
import { compare } from 'pinyin'
import { getHash, getTimeStringAtTimeZone } from './util'

async function main () {
  let browser = await puppeteer.launch({
    executablePath: Launcher.getInstallations()[0],
  })

  try {
    await checkIntegrity(positions)

    const positionsRefined: ProcessedData = await preprocessData()

    const outFile = path.join(__dirname, '../public/data-processed.json')
    await fs.writeFile(outFile, JSON.stringify(positionsRefined, null, 2))
    console.log(`Successfully wrote processed data to ${path.relative(process.cwd(), outFile)}`)

    await generateReadme(positionsRefined)
  } finally {
    await browser.close()
  }

  async function getTitleFromUrl (url: string): Promise<string> {
    console.log(`Get title of url: ${url} ...`)
    let title: JSHandle<string>
    try {
      const page = await browser.newPage()
      await page.goto(url, {
        waitUntil: 'domcontentloaded',
      })
      title = await page.waitForFunction("document.querySelector('title')?.innerText")
    } catch (err) {
      console.log(`遇到错误 ${(err as Error).message ?? '未知错误'}，重试中...`)
      await browser.close()
      browser = await puppeteer.launch({
        executablePath: Launcher.getInstallations()[0],
      })
      return await getTitleFromUrl(url)
    }

    if (title == null) {
      throw new Error(`Failed to get title from url: ${url}`)
    }
    return (await title.jsonValue())
  }

  async function checkIntegrity (positions: Position[]) {
    const s = new Set()
    for (const position of positions) {
      const hash = getHash(position)
      if (s.has(hash)) {
        throw new Error(`Duplicate position: ${JSON.stringify(position)}`)
      }
      s.add(hash)
    }
    console.log('Successfully checked integrity')
  }

  async function preprocessData (): Promise<ProcessedData> {
    const refinedPositions: PositionRefined[] = []
    const urls = positions.map(p => p.announcement.url)
    const titles = []
    for (let i = 0; i < urls.length; i += 10) {
      titles.push(...await Promise.all(urls.slice(i, i + 10).map(getTitleFromUrl)))
    }
    for (let i = 0; i < positions.length; i++) {
      const position = positions[i]
      const refinedPosition = {
        ...position,
        announcement: {
          ...position.announcement,
          title: titles[i],
        },
      }
      refinedPositions.push(refinedPosition)
    }

    // sort by company name
    refinedPositions.sort((a, b) => compare(a.company.name, b.company.name))
    console.log('Successfully preprocessed data')
    return {
      updatedAt: Date.now(),
      positions: refinedPositions,
    }
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

|公司名称|招聘类型|官方公告|日期|公司类型|
|-|-|-|-|-|
${positions.map(position => `
|[${markdownEscape(position.company.name)}](${markdownEscape(position.company.website)})|${markdownEscape(position.type)}|[${markdownEscape(position.announcement.title)}](${markdownEscape(position.announcement.url)})|${markdownEscape(position.announcement.date)}|${markdownEscape(position.company.type)}|
`.trim()).join('\n')}
    `.trim()
  }

  async function generateReadme (processedData: ProcessedData) {
    const banner = `
# new-grad-positions

[![LICENSE](https://img.shields.io/github/license/upupming/new-grad-positions?style=flat-square)](https://github.com/upupming/new-grad-positions/blob/main/LICENSE) [![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/upupming/new-grad-positions/blob/main/src/data.ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com) [![npm (tag)](https://img.shields.io/npm/v/new-grad-positions/latest?style=flat-square)](https://www.npmjs.com/package/new-grad-positions)
[![npm](https://img.shields.io/npm/dm/new-grad-positions?style=flat-square)](https://www.npmjs.com/package/new-grad-positions)

本项目旨在收集互联网公司校招和实习的最新官方招聘信息，帮助在校生消除信息不对称带来的劣势。欢迎贡献 👏🏻，可以直接修改 [src/data.ts](src/data.ts) 来增加数据并提交 PR。

前往 https://upupming.site/new-grad-positions/ 查看效果更佳。

<!-- DO NOT MODIFY THIS FILE, IT IS AUTOMATICALLY GENERATED FROM src/generate-readme.ts -->
`.trim()

    let content = ''
    const groupedByYear = await groupByYear(processedData.positions)
    // descending sort by year
    for (const [year, positions] of Object.entries(groupedByYear).sort((a, b) => -a[0].localeCompare(b[0]))) {
      const groupedByType = await groupByType(positions)
      // ascending sort by type
      for (const [type, positions] of Object.entries(groupedByType).sort((a, b) => a[0].localeCompare(b[0]))) {
        content += '\n' + await generateReadmeForYearAndType(Number(year), type as PositionType, positions) + '\n'
      }
    }

    const footer = `
## 本地开发

\`\`\`bash
pnpm i
pnpm generate
pnpm dev:vite
\`\`\`

## API

原始数据 JSON API: https://upupming.site/new-grad-positions/data-processed.json

作为 npm 包引入使用：

\`\`\`bash
npm i new-grad-positions
\`\`\`

\`\`\`ts
import processedData, { ProcessedData } from 'new-grad-positions'

console.log(processedData.updatedAt)
\`\`\`

---

上次更新于: ${getTimeStringAtTimeZone(new Date(processedData.updatedAt))} (UTC+8)
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
}

void main()
