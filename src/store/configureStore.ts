import { configureStore } from "@reduxjs/toolkit"
import { createWrapper } from "next-redux-wrapper"
import counterReducer from "@store/counterSlice"
import { pokemonApi } from "@services/pokemon"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  })

export const store = makeStore()
setupListeners(store.dispatch)

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore["getState"]>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<AppStore>(makeStore)
