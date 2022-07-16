import React, { useRef, useState } from 'react'
import { PositionRefined } from '../../data'
import { getHash } from '../../util'
import { PositionCard } from '../components/PositionCard'
import { SortMethod } from '../components/SortMethod'
import { availableSortMethods, SortMethodWithOrder, SortOrder } from '../common/const'
import { SortMethodAdder } from '../components/SortMethodAdder'
import { compare } from 'pinyin'
import { get } from 'lodash-es'
import IconClose from '~icons/material-symbols/close'
import { includes } from '../common/utils'

export interface PositionsGridProps {
  positions: PositionRefined[]
}

export const NEW_GRADUATE_POSITION_HASH = 'new-graduate-position'

const STARED_KEY = NEW_GRADUATE_POSITION_HASH + '-stared'
const SORT_METHODS_KEY = NEW_GRADUATE_POSITION_HASH + '-sort-conditions'
const FILTERS_KEY = NEW_GRADUATE_POSITION_HASH + '-filters'

const defaultSortMethods: SortMethodWithOrder[] = [
  { path: 'type', order: SortOrder.ASCENDING, name: '招聘类型', }, { path: 'announcement.date', order: SortOrder.DESCENDING, name: '日期', }, { path: 'company.name', order: SortOrder.ASCENDING, name: '公司名称', }]

export const PositionsGrid: React.FC<PositionsGridProps> = ({ positions, }) => {
  const [staredMap, _setStaredMap] = useState(JSON.parse(localStorage.getItem(STARED_KEY) ?? '{}'))
  const setStaredMap = (newStaredMap: { [key: string]: boolean }) => {
    localStorage.setItem(STARED_KEY, JSON.stringify(newStaredMap))
    _setStaredMap(newStaredMap)
  }
  const [sortMethods, _setSortMethods] = useState(JSON.parse(localStorage.getItem(SORT_METHODS_KEY) ?? JSON.stringify(defaultSortMethods)) as SortMethodWithOrder[])
  const setSortMethods = (methods: SortMethodWithOrder[]) => {
    localStorage.setItem(SORT_METHODS_KEY, JSON.stringify(methods))
    _setSortMethods(methods)
  }
  const [filters, _setFilters] = useState(JSON.parse(localStorage.getItem(FILTERS_KEY) ?? '[]') as string[])
  const setFilters = (filters: string[]) => {
    localStorage.setItem(FILTERS_KEY, JSON.stringify(filters))
    _setFilters(filters)
  }
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <div className='max-w-400 m-auto'>
      <div className='m-8 space-y-2 flex flex-col items-center'>
        <input
          type='search' placeholder='搜索...'
          ref={searchRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              searchRef.current?.value && setFilters([...new Set([...filters, searchRef.current.value])])
            }
          }}
          className='max-w-150'
        />
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
          {filters.map(filter => (
            <div key={filter} className='bg-themeable-selection-200 rounded-md p-2 border-transparent hover:border-themeable-cyan border-width-1px cursor-pointer flex items-center justify-between'>
              <div className='font-bold'>{filter}</div>
              <IconClose
                className='text-themeable-red cursor-pointer' onClick={() => {
                  setFilters(filters.filter(f => f !== filter))
                }}
              />
            </div>))}
        </div>
        <hr />
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
          {sortMethods.map((sortMethod) => <SortMethod
            key={sortMethod.path} {...sortMethod}
            changeOrder={() => {
              setSortMethods(sortMethods.map((_sortMethod) => {
                if (_sortMethod.path === sortMethod.path) {
                  return { ..._sortMethod, order: _sortMethod.order === SortOrder.ASCENDING ? SortOrder.DESCENDING : SortOrder.ASCENDING, }
                }
                return _sortMethod
              }))
            }}
            destroy={() => {
              setSortMethods(sortMethods.filter((_sortMethod) => _sortMethod.path !== sortMethod.path))
            }}
                                           />)}
          <SortMethodAdder
            availableSortMethods={availableSortMethods} onAdd={(sortMethod) => {
              setSortMethods([...sortMethods.filter(method => method.path !== sortMethod.path), sortMethod])
            }}
          />
        </div>
        <hr />
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 bg-themeable-background'>
          {positions.sort((a, b) => {
            const aStared = Boolean(staredMap[getHash(a)])
            const bStared = Boolean(staredMap[getHash(b)])
            if (aStared !== bStared) return aStared ? -1 : 1

            for (const sortMethod of sortMethods) {
              let less: number = compare(get(a, sortMethod.path), get(b, sortMethod.path))
              const great: number = compare(get(a, sortMethod.path), get(b, sortMethod.path))
              if (!less && !great) continue
              if (sortMethod.order === SortOrder.DESCENDING) less = -less
              return less
            }
            return 0
          }).map(position => {
            const hash = getHash(position)
            return includes(position, filters).includes(false)
              ? null
              : (
                <PositionCard
                  position={position} key={hash}
                  stared={staredMap[hash]}
                  setStared={(newStared) => {
                    setStaredMap({ ...staredMap, [hash]: newStared, })
                  }}
                />
                )
          })}
        </div>
      </div>
    </div>
  )
}
