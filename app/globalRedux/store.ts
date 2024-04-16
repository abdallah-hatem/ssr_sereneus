"use client"

import { configureStore } from "@reduxjs/toolkit"

import districtReducer from "./features/district/districtSlice"

export const store = configureStore({
  reducer: { district: districtReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
