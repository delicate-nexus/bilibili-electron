import { useEffect, useCallback } from 'react'
import { useStore } from '../Store'

export default ({ children }) => {
  const {
    mutations: { setHeader }
  } = useStore('miscs')
  const setHeaderChildren = useCallback(() => {
    setHeader(children)
  }, [setHeader, children])
  useEffect(setHeaderChildren, [])
  return null
}
