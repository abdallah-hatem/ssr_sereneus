import GET_AGENCY_DETAILS from "@/api/getAgencyDetails"
import ModalComp from "@/components/functional/modalComp"
import CallButtons from "@/components/shared/callButtons"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaWheelchair,
  FaMoneyBillAlt,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import TextComp from "@/components/ui/textComp"
import React, { Fragment } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// import { Helmet } from "react-helmet-async"

async function getData() {
  const data = await GET_AGENCY_DETAILS(654)

  if (!data) throw new Error("Failed to fetch data")

  return data
}

export default async function AgencyDetails() {
  const data = await getData()

  const {
    name,
    rating,
    files,
    price_from,
    opening_hours,
    wheelchair_accessible_entrance,
    website_url,
    masked_phone_number,
    icon_file,
    geometry,
    formatted_address,
    latitude,
    longitude,
    reviews,
    municipality,
    district,
  } = data

  const crumbs = [
    { name: "Home", url: "/" },
    { name: "Agencies", url: `/agencies` },
    {
      name: district.name,
      url: `/agencies/district/${district.name}`,
      color: "bg-prim",
    },
    {
      name: municipality.name,
      url: `/agencies/district/${district.name}/${municipality.name}`,
      color: "bg-prim",
    },
    { name: name },
  ]

  console.log(data, "data server")

  return (
    <div className="w-[80%] max-[800px]:w-[90%] min-h-screen mx-auto mt-10">
      <BreadCrumbsSection />
      <div className="mt-10 flex flex-row min-[800px]:h-[80vh] max-[800px]:flex-col justify-between space-x-10 max-[800px]:space-x-0 items-center">
        {/* left */}
        <div className="flex-1 flex flex-col">{<RenderLeft />}</div>

        {/* right */}
        <div className="flex-1">
          <div className="visible max-[800px]:hidden">
            <CarouselSection />
          </div>
        </div>
      </div>
    </div>
  )

  function BreadCrumbsSection() {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          {crumbs.map((el, index) => (
            <Fragment key={index}>
              {!el.url && (
                <BreadcrumbItem>
                  <BreadcrumbPage>
                    <TextComp>{name}</TextComp>
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )}

              {el.url && el.name && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={el.url}>
                      <TextComp>{el.name}</TextComp>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <p
                      className={`w-[5px] h-[5px] rounded-full text-base ${
                        el.color ?? "bg-slate-400"
                      }`}
                    />
                  </BreadcrumbSeparator>
                </>
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    )
  }

  function RenderLeft() {
    return (
      <>
        {/* name */}
        <TextComp className="text-3xl">{name}</TextComp>

        {/* rating section */}
        <div className="flex flex-row items-center space-x-2  mt-4 ">
          <a href="/" className="hover:cursor-pointer">
            <img
              src={icon_file ? icon_file.url : "/images/Sereneus-02.png"}
              alt="logo"
              className="w-[100px]"
            />
          </a>
          {/* rating pill */}
          <div className="bg-sec rounded-3xl flex flex-row items-center h-[30px] space-x-2 px-2 w-16 justify-center">
            <FaStar />
            <span>{rating ? rating.toFixed(1) : "N/A"}</span>
          </div>
        </div>
        {/* 
        {/* carousel mob view */}
        {/* <div className="min-[800px]:hidden visible max-[800px]:mt-5">
          <CarouselSection />
        </div> */}

        {/* description */}
        <div className="mt-4">
          <TextComp className="text-lg">
            {name} {formatted_address}
          </TextComp>
        </div>

        {/* address */}
        <div className="flex items-center space-x-2 mt-4">
          <FaMapMarkerAlt />
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {formatted_address}
          </a>
        </div>

        {/* wheelchair accessibility */}

        {/* price */}
        <div className="flex items-center space-x-2 mt-4">
          <FaMoneyBillAlt />
          <TextComp>agencyDetails.price.title</TextComp>
          <span>{price_from ? price_from + "€" : "N/A"}</span>
        </div>
      </>
    )
  }

  function CarouselSection() {
    return (
      <Carousel className="h-[70vh] max-[800px]:h-[45vh]">
        <CarouselContent>
          {files.length > 0 ? (
            files.map((el: any, index: number) => (
              <CarouselItem
                className="h-[70vh] max-[800px]:h-[45vh]"
                key={index}
              >
                <img
                  src={el.url}
                  className="w-full h-full rounded-2xl"
                  alt="pic"
                />
              </CarouselItem>
            ))
          ) : (
            <CarouselItem className="h-[70vh] max-[800px]:h-[45vh]">
              <img
                src="https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-full h-full rounded-2xl"
                alt="pic"
              />
            </CarouselItem>
          )}
        </CarouselContent>
        {files.length > 1 && (
          <>
            <CarouselPrevious className="absolute left-3 opacity-80" />
            <CarouselNext className="absolute right-3 opacity-80" />
          </>
        )}
      </Carousel>
    )
  }
}
