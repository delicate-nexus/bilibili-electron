import React, { useState, useEffect } from 'react'
import { remote } from 'electron'
import { classNames } from '@/utils'
import Item from './Item'

const os = remote.require('os')
const fs = remote.require('fs')
const pt = remote.require('path')

const PathBrowser = ({
  className,
  path,
  selectedPath,
  onItemClick,
  onItemDoubleClick,
  exclude
}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(readdirSync(path, exclude))
  }, [path, exclude])
  const pathBrowserCls = classNames('path-browser', className)
  const pathBrowserListCls = classNames('path-browser-list')
  return (
    <div className={pathBrowserCls}>
      <ul className={pathBrowserListCls}>
        {data.map(({ name, path, isDirectory }, index) => {
          return (
            <Item
              selected={selectedPath === path}
              isDirectory={isDirectory}
              onDoubleClick={() => onItemDoubleClick(name, path, isDirectory)}
              onClick={() => onItemClick(name, path, isDirectory)}
              key={index}
            >
              {name}
            </Item>
          )
        })}
      </ul>
    </div>
  )
}

export default PathBrowser

PathBrowser.defaultProps = {
  path: os.homedir(),
  exclude: [/^\./],
  include: [/.*/],
  onItemClick: () => {},
  onItemDoubleClick: () => {}
}

function readdirSync(p, exclude = []) {
  if (fs.statSync(p).isFile()) {
    return []
  }
  const res = fs
    .readdirSync(p)
    .filter((name) => {
      return exclude.some((reg) => !reg.test(name))
    })
    .map((name) => {
      const path = pt.join(p, name)
      return {
        name,
        path,
        isDirectory: fs.statSync(path).isDirectory()
      }
    })
    .sort((a, b) => b.isDirectory - a.isDirectory)
  const prevPath = pt.join(p, '..')
  if (p !== '/') {
    res.unshift({
      name: '..',
      path: prevPath,
      isDirectory: fs.statSync(prevPath).isDirectory()
    })
  }
  return res
}
