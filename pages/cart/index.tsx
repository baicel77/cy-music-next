import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}
const Cart: FC<IProps> = () => {
  return <div>Cart</div>
}

export default memo(Cart)
