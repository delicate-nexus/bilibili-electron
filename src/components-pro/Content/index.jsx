import React from 'react'
import { Layout } from '@/components'
import './index.scss'

const { Content } = Layout

export default ({ children }) => {
  return <Content className='app-content'>{children}</Content>
}
