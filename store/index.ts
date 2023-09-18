import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from './modules/layout'
import { createWrapper } from 'next-redux-wrapper'
const store = configureStore({
  reducer: {
    layout: layoutReducer
  }
})
const wrapper = createWrapper(() => store)
export default wrapper

export type IAppStateType = ReturnType<typeof store.getState>
export type IAppDispatchType = typeof store.dispatch