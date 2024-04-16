import React from "react"
import TextComp from "../ui/textComp"
import CallButtons from "./callButtons"
import { useTranslation } from "react-i18next"

export default function EndSection() {

  return (
    <div className="mt-16 flex flex-col justify-center items-center mx-auto">
      <TextComp className="text-5xl max-[800px]:text-3xl max-w-[750px] text-center">
        agencyDetails.endSection.title
      </TextComp>

      <CallButtons
        hideRightButton
        className="w-[205px] max-h-[60px]"
        phoneNumber="general_phone_number"
      />
    </div>
  )
}
