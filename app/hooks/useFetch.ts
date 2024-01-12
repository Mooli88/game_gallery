import { useEffect, useState } from 'react'

const _cache: Record<string, any> = {}

const setCache = <T>(id: string, data: T) => {
  _cache[id] = data
}

const getCache = (uri: string) => _cache[uri]

type ReturnType<T> = [
  T,
  {
    isLoading: boolean
    doFetch: (uri: string) => Promise<void>
  }
]

export const useFetch = <T>(
  uri: string,
  { fetchOnInit = true } = {}
): ReturnType<T | undefined> => {
  const [isLoading, setLoading] = useState(fetchOnInit)
  const [data, setData] = useState<T>()

  const doFetch = async (uri: string) => {
    const cache = getCache(uri)
    if (cache) {
      setCache(uri, cache)
      return
    }

    try {
      const response = await fetch(uri)
      const json = await response.json()
      setData(json)
      setCache(uri, json)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (fetchOnInit) {
      doFetch(uri)
    }
  }, [fetchOnInit])

  return [data, { isLoading, doFetch }]
}
