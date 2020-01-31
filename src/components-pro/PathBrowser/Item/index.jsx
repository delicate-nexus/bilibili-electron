import React from 'react'
import { Icon } from '@/components'
import { classNames } from '@/utils'
import './index.scss'

const Item = ({ isDirectory, selected, className, children, ...rest }) => {
  const itemCls = classNames(
    'path-browser-item',
    className,
    selected && 'path-browser-item-selected'
  )
  const textCls = classNames('path-browser-item-text')
  return (
    <li className={itemCls} {...rest}>
      <Icon type={isDirectory ? 'folder' : 'file'} />
      <span className={textCls}>{children}</span>
    </li>
  )
}

export default Item
