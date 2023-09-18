import cyRequest, { IResultData } from ".";

export interface ISearchSuggesion {
  id?: number
  defaultKey?: string
  configKey?: any[]
}
export function getSearchSuggesion() {
  return cyRequest.get<IResultData<ISearchSuggesion>>({
    url: '/searchsuggest/get'
  })
}