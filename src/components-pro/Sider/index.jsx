import React from 'react'
import { Layout } from '@/components'
import Menu from './Menu'
import './index.scss'

const { Sider } = Layout

export default ({ collapsed, onCollapse }) => {
  return (
    <Sider
      className='app-sider'
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className='user'>
        <div className='logo'></div>
        <div className='username'>登录</div>
      </div>
      <Menu />
    </Sider>
  )
}
