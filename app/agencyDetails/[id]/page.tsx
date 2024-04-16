"use client"

import GET_AGENCY_DETAILS from "@/api/getAgencyDetails"
import React, { useEffect, useState } from "react"
// import { Helmet } from "react-helmet-async"
import AgencyDetailsPage from "./components/agencyDetailsPage"
import { useParams } from "next/navigation"

export default function AgencyDetails() {
  const [data, setData] = useState<any[] | null>(null)

  const params = useParams()
  const { id } = params

  useEffect(() => {
    GET_AGENCY_DETAILS(Number(id)).then((data) => {
      setData(data)
    })
  }, [])

  return data && <AgencyDetailsPage data={data} />
}
