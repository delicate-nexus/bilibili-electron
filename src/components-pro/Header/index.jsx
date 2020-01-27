import React from 'react'
import { Layout } from 'antd'
import { Icon } from '@/components'
import { useStore } from '../Store'
import './index.scss'

const { Header } = Layout

export default ({ collapsed, onCollapseClick }) => {
  const {
    state: { header }
  } = useStore('miscs')
  return (
    <Header className='app-header'>
      <Icon
        className='trigger'
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={onCollapseClick}
      />
      {header}
    </Header>
  )
}
