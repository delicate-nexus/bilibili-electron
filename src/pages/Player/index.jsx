import React, { useState, useCallback } from 'react'
import { PathBrowser } from '@/components-pro'
import { Helmet } from '@/components-pro'

export default () => {
  const [path, setPath] = useState()
  const handleItemClick = useCallback((name, path, isDirectory) => {
    isDirectory && setPath(path)
  }, [])
  return (
    <div>
      <Helmet>
        <h1>本地视频播放</h1>
      </Helmet>
      <PathBrowser onItemClick={handleItemClick} path={path} />
    </div>
  )
}
