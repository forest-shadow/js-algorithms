/**
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const mergeIntervals = (intervals) => {
  if (intervals.length === 0 || intervals.length === 1) {
    return intervals
  }
  intervals.sort((a, b) => a[0] - b[0])
  let current = intervals[0]
  const merged = []
  for (let i = 1; i < intervals.length; i++) {
    let next = intervals[i]
    if (current[1] >= next[0]) {
      if (current[1] <= next[1]) {
        current[1] = next[1]
      }
    } else {
      merged.push(current)
      current = next
    }
  }
  merged.push(current)
  return merged
}

export default mergeIntervals