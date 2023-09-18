import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AppHeader from '../app-header'
import AppFooter from '../app-footer'

interface IProps {
  children?: ReactNode
}
const Layout: FC<IProps> = (props) => {
  const { children } = props
  return (
    <>
      <AppHeader></AppHeader>
      {children}
      <AppFooter></AppFooter>
    </>
  )
}

export default memo(Layout)
