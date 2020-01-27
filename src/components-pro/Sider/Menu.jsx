import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Icon } from '@/components'

// const { SubMenu } = Menu

export default () => {
  const { pathname } = useLocation()
  return (
    <Menu theme='dark' selectedKeys={[pathname]} mode='inline'>
      <Menu.Item key='/home'>
        <Link to='/'>
          <Icon type='home' />
          <span>首页</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='/hot'>
        <Link to='/hot'>
          <Icon type='fire' />
          <span>热门</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='/anime'>
        <Link to='/anime'>
          <Icon type='video-camera' />
          <span>追番</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='/player'>
        <Link to='/player'>
          <Icon type='play-circle' />
          <span>本地视频播放</span>
        </Link>
      </Menu.Item>
      <Menu.Item key='/setting'>
        <Link to='/setting'>
          <Icon type='setting' />
          <span>设置</span>
        </Link>
      </Menu.Item>
    </Menu>
  )
}
