import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { GetServerSideProps } from 'next'
import wrapper from '@/store'
import { fetchSearchSuggesionAction } from '@/store/modules/layout'
import { getAllProduct, getHomeData, getHotProduct } from '@/service/home'
import { IAllProduct, IBanners, ICategorys, IDigitalData, IHotProduct, IRecommends } from '@/service/type'
import TopSwiper from '@/components/top-swiper'
import style from './index.module.scss'
import TabCategory from '@/components/tab-category'
import Recommend from '@/components/recommend'
import classNames from 'classnames'
import SectionTitle from '@/components/section-title'
import GridView from '@/components/grid-view'
import DigitalPanel from '@/components/digital-panel'

interface IProps {
  children?: ReactNode
  banners: IBanners[]
  categorys: ICategorys[]
  recommends: IRecommends[]
  digitalData: IDigitalData
  hotProduct: IHotProduct[]
  allProduct: IAllProduct[]
}
const Home: FC<IProps> = (props) => {
  const { banners, categorys, recommends, digitalData, hotProduct, allProduct } = props
  return (
    <>
      <div className={style["home"]}>
        <TopSwiper banners={banners}></TopSwiper>
        <TabCategory categorys={categorys}></TabCategory>
        <Recommend recommends={recommends}></Recommend>
        {/* 中间的内容->版心 */}
        <div className={classNames("wrapper", style.content)}>
          <DigitalPanel itemData={digitalData}></DigitalPanel>
          <SectionTitle title='编辑推荐'></SectionTitle>
          <GridView products={hotProduct}></GridView>
          <SectionTitle title='热门商品'></SectionTitle>
          <GridView products={allProduct}></GridView>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => {
  return async (context) => {
    await store.dispatch(fetchSearchSuggesionAction())
    const res = await getHomeData()
    const productRes = await getHotProduct()
    const allProductRes = await getAllProduct()
    return {
      props: {
        banners: res.data.banners,
        categorys: res.data.categorys,
        recommends: res.data.recommends,
        digitalData: res.data.digitalData,
        hotProduct: productRes.data.hotProduct,
        allProduct: allProductRes.data.allProduct
      } 
    }
  }
})

export default memo(Home)
  