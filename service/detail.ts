import cyRequest, { IResultData } from ".";
import { IDetailData } from "./type";

export function getDetailData(id: string) {
  return cyRequest.get<IResultData<IDetailData>>({
    url: '/special/getdetail?specialTopicId=' + id
  })
}