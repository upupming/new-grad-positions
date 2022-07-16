import React from 'react'
import { PositionRefined } from '../../data'

import IconEmployeeType from '~icons/clarity/employee-line'
import IconCalendar from '~icons/material-symbols/calendar-month-outline-rounded'
import IconGraduation from '~icons/ph/graduation-cap'
import IconStarBorder from '~icons/ic/baseline-star-border'
import IconStarSolid from '~icons/ic/baseline-star'

export interface PositionCardProps {
  position: PositionRefined
  stared: boolean
  setStared: (stared: boolean) => void
}

export const PositionCard: React.FC<PositionCardProps> = ({ position, stared, setStared, }) => {
  return (
    <div
      className='bg-themeable-comment-200 p-4 rounded-xl flex flex-col space-y-1  hover:scale-102 shadow-lg hover:shadow-themeable-selection transform cursor-pointer' onClick={() => {
        window.open(position.company.website)
      }}
    >
      <div className='flex justify-between items-center'>
        <div>
          <a href={position.company.website} rel='nofollow' className=''>
            <div className='text-2xl font-bold'>{position.company.name}</div>
          </a>
        </div>
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
      <div>
        <a href={position.announcement.url} rel='nofollow'>
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
  )
}
