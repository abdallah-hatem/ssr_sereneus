"use client"

import { createSlice } from "@reduxjs/toolkit"

export const districtSlice = createSlice({
  name: "district",
  initialState: {
    districts: [],
    selectedDistrict: null,
    selectedMaunicipality: null,
  },
  reducers: {
    setDistricts: (state, action) => {
      state.districts = action.payload
    },
    setSelectedDistrict: (state, action) => {
      state.selectedDistrict = action.payload
      localStorage.setItem("selectedDistrict", action.payload)
    },
    setSelectedMaunicipality: (state, action) => {
      state.selectedMaunicipality = action.payload
      localStorage.setItem("selectedMaunicipality", action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDistricts, setSelectedDistrict, setSelectedMaunicipality } =
  districtSlice.actions

export default districtSlice.reducer
