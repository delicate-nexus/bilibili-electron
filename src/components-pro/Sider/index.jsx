import React from 'react'
import { Layout } from '@/components'
import Menu from './Menu'
import './index.scss'

const { Sider } = Layout

export default ({ collapsed, onCollapse }) => {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className='logo'>聚合云</div>
      <Menu />
    </Sider>
  )
}
