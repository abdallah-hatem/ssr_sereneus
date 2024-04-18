"use client"

import TextComp from "@/components/ui/textComp"
import React from "react"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <div className="bg-sec min-h-[100vh] flex items-center py-10">
      <div className="flex items-center justify-between w-[80%] max-[1000px]:w-[90%] mx-auto max-[1000px]:flex-col-reverse">
        {RenderLeft()}

        <img
          src="/images/hero-img.png"
          alt="logo"
          className="max-[1000px]:mt-[14px]"
        />
      </div>
    </div>
  )

  function RenderLeft() {
    return (
      <>
        <div className="max-[1000px]:mt-10">
          {/* Header */}
          <TextComp
            className="text-[46px] leading-[52px] max-[1000px]:text-center"
            type="h1"
          >
            {"hero_header"}
          </TextComp>

          {/* description */}
          <div className="mt-5 max-[1000px]:text-center">
            <TextComp type="h2" className="text-[18px] leading-[28px]">
              {t("hero_description_1")}
              <span className="text-prim">{t("hero_description_2")}</span>
              {t("hero_description_3")}
            </TextComp>
          </div>

          {/* choose a district */}
          <div className="mt-10">
            {/* <SelectDistrictComp
              data={districts}
              // icon={false}
              loading={districts.length === 0}
              onClickDistrict={(district: string) => {
                dispatch(setSelectedDistrict(district))
                router(`/agencies/district/${district}`)
              }}
            /> */}
          </div>

          {/* Call buttons */}
          {/* <CallButtons
            showNumber={false}
            phoneNumber="+351 965 914 970"
            rightButtonTitle="hero_call_button"
            onRightButtonClick={handleRequestCallClick}
            // onLeftButtonClick={() => window.open(`tel:+351965914970`, "_self")}
          /> */}
        </div>
      </>
    )
  }
}
