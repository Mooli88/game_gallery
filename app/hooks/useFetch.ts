import { useEffect, useRef, useState } from 'react'

const _cache: Record<string, any> = {}

const setCache = (id: string, data: string) => {
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
  const { current: fetchOnInitCurr } = useRef(fetchOnInit)
  const [isLoading, setLoading] = useState(fetchOnInitCurr)
  const [data, setData] = useState<T>()
  // TODO: add error state

  const doFetch = async (uri: string) => {
    const cache = getCache(uri)
    if (cache) {
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
    if (fetchOnInitCurr) {
      doFetch(uri)
    }
  }, [])

  return [data, { isLoading, doFetch }]
}
