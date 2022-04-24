import { Position } from './data'

export const getHash = (position: Position) => {
  return `${position.company.name}_${position.graduationYear}_${position.type}`
}

export function getTimeStringAtTimeZone (date: Date = new Date(), utcOffset = 8) {
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
