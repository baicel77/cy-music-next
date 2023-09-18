import { ISearchSuggesion, getSearchSuggesion } from '@/service/layout'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

interface IState {
  counter: number;
  searchSuggesion: ISearchSuggesion
}

const initialState: IState = {
  searchSuggesion: {},
  counter: 12,
}

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    increment(state, { type, payload }) {
      console.log("increment=>", type, payload); // increment=> home/increment 2
      state.counter += payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(HYDRATE, (state, action: any) => {
      // 同步数据到客户端
      return {
        ...state, //initialState
        ...action.payload.layout //rootState
      }
    }).addCase(fetchSearchSuggesionAction.fulfilled, (state, { payload }) => {
      state.searchSuggesion = payload
    })
  },
})

export const fetchSearchSuggesionAction = createAsyncThunk('fetchSearchSuggesionAction', async () => {
  const res = await getSearchSuggesion()
  return res.data
})

export const { increment } = layoutSlice.actions;
export default layoutSlice.reducer