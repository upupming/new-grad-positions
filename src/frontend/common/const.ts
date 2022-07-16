export enum SortOrder {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
}
export interface SortMethod {
  path: string
  name: string
}

export interface SortMethodWithOrder extends SortMethod {
  order: SortOrder
}

export const availableSortMethods: SortMethod[] = [
  { path: 'type', name: '招聘类型', },
  { path: 'company.name', name: '公司名称', },
  { path: 'announcement.title', name: '官方公告', },
  { path: 'announcement.date', name: '日期', },
  { path: 'company.type', name: '公司类型', }
]

export const NEW_GRADUATE_POSITION_HASH = 'new-graduate-position'
export const STARED_KEY = NEW_GRADUATE_POSITION_HASH + '-stared'
export const SORT_METHODS_KEY = NEW_GRADUATE_POSITION_HASH + '-sort-conditions'
export const FILTERS_KEY = NEW_GRADUATE_POSITION_HASH + '-filters'
export const NOTES_KEY = NEW_GRADUATE_POSITION_HASH + '-notes'
