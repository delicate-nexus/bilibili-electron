import React from 'react'
import { remote } from 'electron'
import { Helmet } from '@/components-pro'

// const { remote } = window.require('electron')
const fs = remote.require('fs')

export default () => {
  return (
    <div>
      <Helmet>
        <h1>本地视频播放</h1>
      </Helmet>
      {fs.readdirSync('/')}
      {/* <h1>This is player page</h1> */}
    </div>
  )
}
