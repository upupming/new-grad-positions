import React from 'react'
import { PositionRefined } from '../../data'
import { getHash } from '../../util'
import { get } from 'lodash-es'
import { compare } from 'pinyin'

const isObject = (val: any) => val && typeof val === 'object'
export function includes (target: any, searchList: string[]): boolean[] {
  const ans = Array(searchList.length).fill(false)
  const merge = (ans: boolean[], tmp: boolean[]) => {
    for (let i = 0; i < ans.length; i++) {
      ans[i] ||= tmp[i]
    }
    return ans
  }
  if (isObject(target)) {
    Object.keys(target).forEach(key => merge(ans, includes(target[key], searchList)))
    return ans
  }
  if (Array.isArray(target)) {
    target.forEach(item => merge(ans, includes(item, searchList)))
    return ans
  }
  return searchList.map(search => String(target).includes(search))
}

export function PositionsTable ({
  positions
}: {
  positions: PositionRefined[]
}) {
  const [filter, setFilter] = React.useState('')

  const [started, setStared] = React.useState<{ [key: string]: boolean }>(Object.fromEntries(positions.map(position => {
    const hash = getHash(position)
    return [hash, localStorage.getItem(hash) === 'true']
  })))

  enum SortOrder {
    ASCENDING = 'ASCENDING',
    DESCENDING = 'DESCENDING',
  }
  const [sortOrder, setSortOrder] = React.useState<SortOrder>(SortOrder.ASCENDING)
  const sortMethods = [
    { path: 'company.name', name: '公司名称' },
    { path: 'type', name: '招聘类型' },
    { path: 'announcement.title', name: '官方公告' },
    { path: 'announcement.date', name: '日期' },
    { path: 'company.type', name: '公司类型' }
  ]
  const [sortMethodIndex, setSortMethodIndex] = React.useState(0)

  return (
    <div className='positions-table p-6 space-y-6 bg-themeable-background'>
      <input
        type='text' placeholder='搜索...（多个关键字用空格隔开）' value={filter} onChange={(e) => {
          setFilter(e.target.value)
        }}
        className='input-text'
      />
      <div>
        <div className='flex flex-row px-2 justify-between items-center'>
          <div className='space-x-2'>
            <label htmlFor='sort-method'>排序方式:</label>
            <select
              name='sort-method' id='sort-method' value={sortMethodIndex} onChange={(e) => {
                setSortMethodIndex(parseInt(e.target.value))
              }}
              className='bg-themeable-background'
            >
              {sortMethods.map((method, idx) => (<option key={method.name} value={idx}>{method.name}</option>))}
            </select>
          </div>
          <div className='space-x-2'>
            <label htmlFor='sort-method-ascending'>升序</label>
            <input
              type='radio' id='sort-order-ascending' name='sort-order' checked={sortOrder === SortOrder.ASCENDING} onChange={(e) => {
                setSortOrder(e.target.checked ? SortOrder.ASCENDING : SortOrder.DESCENDING)
              }}
            />
            <label className='pl-4' htmlFor='sort-method-descending'>降序</label>
            <input
              type='radio' id='sort-order-descending' name='sort-order' checked={sortOrder === SortOrder.DESCENDING} onChange={(e) => {
                setSortOrder(e.target.checked ? SortOrder.DESCENDING : SortOrder.ASCENDING)
              }}
            />
          </div>
        </div>
      </div>
      <div className='overflow-auto flex justify-center items-center p-2'>
        <table>
          <thead>
            <tr>
              <th>关注</th>
              <th>公司名称</th>
              <th>毕业年份</th>
              <th>招聘类型</th>
              <th>官方公告</th>
              <th>日期</th>
              <th>公司类型</th>
            </tr>
          </thead>

          <tbody>
            {positions.sort((a, b) => {
              const aStarted = started[getHash(a)]; const bStarted = started[getHash(b)]
              if (aStarted !== bStarted) return aStarted ? -1 : 1
              let less: number = compare(get(a, sortMethods[sortMethodIndex].path), get(b, sortMethods[sortMethodIndex].path))
              if (sortOrder === SortOrder.DESCENDING) less = -less
              return less
            }).map((position) => (
              includes(position, (filter ?? '').split(' ')).includes(false)
                ? null
                : (
                  <tr key={getHash(position)}>
                    <td
                      onClick={() => {
                        setStared(prev => {
                          const hash = getHash(position)
                          const newStared = !prev[getHash(position)]
                          localStorage.setItem(hash, JSON.stringify(newStared))
                          return {
                            ...prev,
                            [hash]: newStared
                          }
                        })
                      }}
                      className='cursor-pointer text-2xl'
                    >{started[getHash(position)] ? '★' : '☆'}
                    </td>

                    <td>
                      <a href={position.company.website} rel='nofollow'>
                        {position.company.name}
                      </a>
                    </td>

                    <td>{position.graduationYear}</td>

                    <td>{position.type}</td>

                    <td>
                      <a href={position.announcement.url} rel='nofollow'>
                        {position.announcement.title}
                      </a>
                    </td>

                    <td>{position.announcement.date}</td>

                    <td>{position.company.type}</td>
                  </tr>)
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
