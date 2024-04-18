"use client"

import { createSlice } from "@reduxjs/toolkit"

export const districtSlice = createSlice({
  name: "district",
  initialState: {
    districts: [],
    selectedDistrict: null,
    // selectedDistrict: localStorage.getItem("selectedDistrict"),
    // selectedMaunicipality: localStorage.getItem("selectedMaunicipality"),
    selectedMaunicipality: null,
    pagination: {
      has_next: null,
      count: null,
      page: null,
      per_page: null,
    },
  },
  reducers: {
    setDistricts: (state, action) => {
      state.districts = action.payload
    },
    setSelectedDistrict: (state, action) => {
      state.selectedDistrict = action.payload

      if (action.payload === null)
        return localStorage.removeItem("selectedDistrict")

      localStorage.setItem("selectedDistrict", action.payload)
    },
    setSelectedMaunicipality: (state, action) => {
      state.selectedMaunicipality = action.payload
      if (action.payload === null)
        return localStorage.removeItem("selectedMaunicipality")

      localStorage.setItem("selectedMaunicipality", action.payload)
    },
    setPagination: (state, action) => {
      state.pagination = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  setDistricts,
  setSelectedDistrict,
  setSelectedMaunicipality,
  setPagination,
} = districtSlice.actions

export default districtSlice.reducer
