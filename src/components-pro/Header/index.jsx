import React from 'react'
import { Layout } from 'antd'
import { Icon } from '@/components'
import './index.scss'

const { Header } = Layout

export default ({ collapsed, onCollapseClick }) => {
  return (
    <Header className='app-header'>
      <Icon
        className='trigger'
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onCollapseClick}
      />
    </Header>
  )
}
