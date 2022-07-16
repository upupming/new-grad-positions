import React from 'react'
import IconAdd from '~icons/material-symbols/add'
import { SortMethod, SortMethodWithOrder, SortOrder } from '../common/const'

export interface SortMethodAdderProps {
  availableSortMethods: SortMethod[]
  onAdd: (sortMethod: SortMethodWithOrder) => void
}

export const SortMethodAdder: React.FC<SortMethodAdderProps> = ({
  availableSortMethods,
  onAdd,
}) => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false)

  return (
    <div className='relative'>
      <div className='flex items-center space-x-2 flex items-center bg-themeable-selection-200 rounded-md p-2 border-transparent hover:border-themeable-cyan border-width-1px cursor-pointer' onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
        <div className='font-bold'>添加排序条件</div>
        <IconAdd />
      </div>
      <ul className={`text-themeable-background pt-1 absolute right-0 z-10 ${dropdownOpen ? 'block' : 'hidden'}`} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
        {availableSortMethods.map(method => (
          <li
            key={method.path} className='
          first:rounded-t
          last:rounded-b
          bg-themeable-foreground
          py-2
          px-4
          hover:bg-themeable-cyan
          cursor-pointer
          '
            onClick={() => {
              onAdd({
                path: method.path,
                order: SortOrder.ASCENDING,
                name: method.name,
              })
              setDropdownOpen(false)
            }}
          >{method.name}
          </li>
        ))}
      </ul>
    </div>
  )
}
