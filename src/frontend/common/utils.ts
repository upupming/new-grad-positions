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
  return searchList.map(search => String(target).toLowerCase().includes(search.toLowerCase()))
}
