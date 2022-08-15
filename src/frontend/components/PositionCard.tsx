import React from 'react'
import { PositionRefined } from '../../data'

import IconEmployeeType from '~icons/clarity/employee-line'
import IconCalendar from '~icons/material-symbols/calendar-month-outline-rounded'
import IconCopy from '~icons/material-symbols/content-copy'
import IconSuccess from '~icons/icon-park-outline/correct'
import IconGraduation from '~icons/ph/graduation-cap'
import IconStarBorder from '~icons/ic/baseline-star-border'
import IconStarSolid from '~icons/ic/baseline-star'

export interface PositionCardProps {
  position: PositionRefined
  stared: boolean
  setStared: (stared: boolean) => void
  notes: string
  updateNotes: (notes: string) => void
}

export const PositionCard: React.FC<PositionCardProps> = ({ position, stared, setStared, notes, updateNotes, }) => {
  const [modelOpen, setModelOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  return (
    <>
      <div
        title={notes ? `笔记: ${notes}` : ''}
        className='bg-themeable-comment-200 p-4 rounded-xl flex flex-col space-y-1  hover:scale-102 shadow-lg hover:shadow-themeable-selection transform cursor-pointer duration-500 ease' onClick={() => {
          // window.open(position.company.website)
          setModelOpen((modelOpen) => {
            return !modelOpen
          })
        }}
        style={{
          transitionProperty: 'transform, box-shadow',
        }}
      >
        <div className='flex justify-between items-center'>
          <div>
            <a href={position.company.website} rel='nofollow noreferrer' target='_blank' onClick={(e) => e.stopPropagation()}>
              <div className='text-2xl font-bold'>{position.company.name}</div>
            </a>
          </div>
          <div className='flex items-center space-x-4'>
            <div title='复制职位信息'>
              {
              copied
                ? <IconSuccess className='transform hover:scale-125 transition-all' />
                : <IconCopy
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    className='transform scale-125 hover:scale-150 transition-all' onClick={(e) => {
                      navigator.clipboard.writeText(`
${position.company.name}: ${position.company.website}
${position.announcement.title}: ${position.announcement.url}
${position.graduationYear} ${position.type}
前往 https://upupming.site/new-grad-positions/ 查看所有职位
                      `.trim()).then(() => {
                        setCopied(true)
                        setTimeout(() => {
                          setCopied(false)
                        }, 1000)
                      }).catch(() => {})
                      e.stopPropagation()
                    }}
                  />
            }
            </div>
            <div title='收藏职位'>
              {stared
                ? <IconStarSolid
                    className='text-2xl text-themeable-cyan cursor-pointer transform hover:scale-125 transition-transform hover:text-themeable-cyan'
                    onClick={(e) => {
                      setStared(false)
                      e.stopPropagation()
                    }}
                  />
                : <IconStarBorder
                    className='text-2xl cursor-pointer transform hover:scale-125 transition-transform hover:text-themeable-cyan'
                    onClick={(e) => {
                      setStared(true)
                      e.stopPropagation()
                    }}
                  />}
            </div>
          </div>
        </div>
        <div>
          <a href={position.announcement.url} rel='nofollow noreferrer' target='_blank' onClick={(e) => e.stopPropagation()}>
            {position.announcement.title}
          </a>
        </div>
        <div className='pb-1' />
        <div className='flex items-center'>
          <IconCalendar /> <div className='px-2'>发布于 {position.announcement.date}</div>
        </div>
        <div className='flex items-center'>
          <IconGraduation /> <div className='px-2'>{position.graduationYear} 届</div>
        </div>
        <div className='flex items-center'>
          <IconEmployeeType /> <div className='px-2'>{position.company.type} | {position.type}</div>
        </div>

      </div>
      <div className={`z-10 ${modelOpen ? 'block' : 'hidden'} fixed`} role='dialog' aria-modal='true'>
        <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />

        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-end sm:items-center justify-center min-h-full p-4 sm:p-0 text-themeable-foreground'>
            <div className='bg-themeable-background rounded-md p-4 max-w-80vw max-h-50vh w-200 h-100 flex flex-col'>
              <div className='text-2xl'><a href={position.announcement.url} target='_blank' rel='noreferrer'>{position.company.name}-{position.announcement.title}</a> 笔记</div>
              <div className='flex w-full v-full flex-1'>
                <textarea className='outline-none text-xl mt-8 mb-4 mx-8 p-4 resize-none border-width-1px p-2 m-2 bg-themeable-background flex-1' value={notes} onChange={(e) => updateNotes(e.target.value)} placeholder='在此输入笔记...' />
              </div>
              <div className='px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                <button type='button' className='mt-3 w-full inline-flex justify-center rounded-md border border-themeable-selection shadow-sm px-4 py-2 bg-themeable-background text-base font-medium hover:bg-themeable-background-100 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm' onClick={() => setModelOpen(false)}>关闭</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
