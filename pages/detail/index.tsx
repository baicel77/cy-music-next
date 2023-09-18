import { memo } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import type { FC, ReactNode } from "react";
import { GetServerSideProps } from "next";
import wrapper from "@/store/index";
import { getDetailData } from "@/service/detail";
import Link from "next/link";
import Image from "next/image";
import GridView from "@/components/grid-view";
import { fetchSearchSuggesionAction } from "@/store/modules/layout";
import { IDetailData } from "@/service/type";

export interface IProps {
  children?: ReactNode;
  detailData?: IDetailData;
}
const Detail: FC<IProps> = memo(function (props) {
  const { detailData } = props;
  return (
    <div className={styles.detail}>
      <div className={classNames("wrapper", styles.content)}>
        {/* 图片 */}
        <div className={styles.banner}>
          <Link href={"/"}>
            <Image
              className={styles.image}
              src={detailData?.webPic!}
              alt="air"
              fill
            ></Image>
          </Link>
        </div>
        {/* 商品列表 */}
        <GridView products={detailData?.products}></GridView>
      </div>
    </div>
  );
});
export default Detail;
Detail.displayName = "Detail"; // 方便以后调试用的

// ssr
// getServerSideProps 是在服务器端运行
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(function (store) {
    return async (context) => {
      // 1.触发一个异步的action来发起网络请求, 拿到搜索建议并存到redex中
      await store.dispatch(fetchSearchSuggesionAction());
      // 2.拿到详情页面的数据
      const { id } = context.query; // 拿到 url中查询字符串
      const res = await getDetailData(id as string);
      return {
        props: {
          detailData: res.data,
        },
      };
    };
  });
