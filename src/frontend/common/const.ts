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
