import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to='profile'>
        <div className='user'>
          <div className='logo'></div>
          <div className='username'>登录</div>
        </div>
      </Link>
      <Menu />
    </Sider>
  )
}
