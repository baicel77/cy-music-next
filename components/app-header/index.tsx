import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import style from './index.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { useSelector, shallowEqual } from 'react-redux'
import type { IAppStateType } from '@/store'

interface IProps {
  children?: ReactNode
}
const AppHeader: FC<IProps> = (props) => {
  
  // const { searchSuggesion, counter } = useSelector((rootState: IAppStateType) => {
  //   return {
  //     counter: rootState.layout.counter,
  //     searchSuggesion: rootState.layout.searchSuggesion
  //   }
  // }, shallowEqual)
  return (
    <div className={style['app-header']}>
      <div className={classNames('wrapper', style['content'])}>
        <div className={style["content-left"]}>
          <Link href="/" className={style["logo"]}></Link>
          <h1 className={style["title"]}>
            网易云音乐商城
          </h1>
        </div>
        <div className={style["content-right"]}>
          <div className={style["search"]}>
            <div className={style["search-bg"]}>
              <input type="text" className={style['text-input']} placeholder='蓝牙耳机'/>
            </div>
            <div className={style["search-panel"]}>
              <div className={style["search-shadow"]}></div>
              <h2>热门搜索</h2>
              <ul>
                {/* {
                  searchSuggesion.configKey?.map((item, index) => {
                    return (
                      <li key={index}>{item[index + 1]}</li>
                    )
                  })
                } */}
              </ul>
            </div>
          </div>
          <div className={style["cart"]}>
            <div className={style["cart-icon"]}>
              <span className={style["count"]}>10</span>
            </div>
          </div>
          <div className={style['login']}>
            登录
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(AppHeader)
