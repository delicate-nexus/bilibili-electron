import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

export default () => {
  const { pathname } = useLocation()
  if (pathname === '/') {
    return <Redirect to='/home' />
  }
  return null
}
