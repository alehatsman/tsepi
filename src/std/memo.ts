function memo(fn: any): any {
  const cache = new Map()

  return (...args: any[]) => {
    const key = args[0]
    if (cache.has(key)) {
      return cache.get(key)
    }

    const res = fn.apply(null, args)
    cache.set(key, res)
    return res
  }
}

export default memo
