import React from 'react'
import IconArrowUpward from '~icons/material-symbols/arrow-upward'
import IconArrowDownward from '~icons/material-symbols/arrow-downward'
import IconClose from '~icons/material-symbols/close'
import { SortMethodWithOrder } from '../common/const'

enum SortOrder {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
}

export interface SortMethodProps extends SortMethodWithOrder {
  changeOrder: (order: SortOrder) => void
  destroy: () => void
}

export const SortMethod: React.FC<SortMethodProps> = ({
  path,
  name,
  order,
  changeOrder,
  destroy,
}) => {
  return (
    <div className='flex items-center flex items-center justify-between bg-themeable-selection-200 rounded-md p-2 border-transparent hover:border-themeable-cyan border-width-1px w-full' title={order === SortOrder.ASCENDING ? '升序' : '降序'}>
      <div className='font-bold'>{name}</div>
      <div className='flex items-center'>
        {order === SortOrder.ASCENDING
          ? <IconArrowUpward
              className='text-themeable-cyan cursor-pointer' onClick={() => {
                order === SortOrder.ASCENDING && changeOrder(SortOrder.DESCENDING)
              }}
            />
          : <IconArrowDownward
              className='text-themeable-cyan cursor-pointer' onClick={() => {
                order === SortOrder.DESCENDING && changeOrder(SortOrder.ASCENDING)
              }}
            />}
        <IconClose className='text-themeable-red cursor-pointer' onClick={() => destroy()} />
      </div>
    </div>
  )
}
