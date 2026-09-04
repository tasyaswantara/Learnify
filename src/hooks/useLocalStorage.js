import { useCallback } from 'react'

function useLocalStorage(key) {
  const getItem = useCallback(() => {
    const item = window.localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }, [key])

  const setItem = useCallback(
    (value) => {
      window.localStorage.setItem(key, JSON.stringify(value))
    },
    [key],
  )

  const removeItem = useCallback(() => {
    window.localStorage.removeItem(key)
  }, [key])

  return { getItem, removeItem, setItem }
}

export default useLocalStorage
