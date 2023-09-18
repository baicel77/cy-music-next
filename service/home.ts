import cyRequest, { IResultData } from ".";
import { IAllProduct, IBanners, ICategorys, IDigitalData, IHotProduct, IRecommends } from "./type";

export interface IHomeData {
  banners: IBanners[]
  categorys: ICategorys[]
  recommends: IRecommends[]
  digitalData: IDigitalData
}

export interface IProductData {
  count: number
  hasMore: boolean
  hotProduct: IHotProduct[]
}

export interface IAllProductData {
  count: number
  allProduct: IAllProduct[]
}

export function getHomeData() {
  return cyRequest.get<IResultData<IHomeData>>({
    url: '/home/info'
  })
}

export function getHotProduct() {
  return cyRequest.get<IResultData<IProductData>>({
    url: '/hotproduct_v2/gets'
  })
}

export function getAllProduct() {
  return cyRequest.get<IResultData<IAllProductData>>({
    url: '/allProduct/gets'
  })
}