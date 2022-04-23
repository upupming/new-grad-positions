import { Position } from './data'

export const getHash = (position: Position) => {
  return `${position.company.name}_${position.graduationYear}_${position.type}`
}
