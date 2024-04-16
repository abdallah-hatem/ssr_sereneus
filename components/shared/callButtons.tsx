import React from "react"
import { Button } from "../ui/button"
import { FaPhoneAlt } from "react-icons/fa"
import TextComp from "../ui/textComp"
import ReactGA from "react-ga4"
import { z } from "zod"
import REQUEST_CALLBACK from "../../api/requestCallback"
import ModalComp from "../functional/modalComp"
import FormComp from "./formComp"
import MAKE_CALL from "../../api/makeCall"

interface Props {
  className?: string
  onRightButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  rightButtonTitle?: string
  phoneNumber?: string
  hideRightButton?: boolean
  onLeftButtonClick?: React.MouseEventHandler<HTMLButtonElement>
  agencyId?: string | number
  disabled?: boolean
}

export default function CallButtons({
  className,
  onRightButtonClick,
  rightButtonTitle = "Title",
  phoneNumber,
  hideRightButton,
  onLeftButtonClick,
  agencyId,
  disabled,
}: Props) {
  const call = () => {
    if (!phoneNumber) return null

    ReactGA.event({
      category: "User",
      action: "Clicked the phone number",
    })

    agencyId &&
      MAKE_CALL(agencyId).then((res) => console.log(res, "res make call"))

    window.open("tel:" + phoneNumber)
  }

  const schema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email(),
    phone_number: z
      .string()
      .regex(/^\d+$/, "Please enter a valid phone number"),
  })

  function onSubmit(data: any) {
    ReactGA.event({
      category: "User",
      action: "Requested a callback",
    })
    REQUEST_CALLBACK(data).then((res) => console.log(res, "res callback"))
  }

  return (
    <div
      className={`flex flex-row max-[1000px]:flex-col space-x-3 items-center mt-10 h-[60px] max-[1000px]:h-[100px] max-[1000px]:space-y-4 ${className}`}
    >
      <Button
        className="flex items-center space-x-2 bg-prim text-black hover:bg-primMid rounded-3xl w-full h-full"
        onClick={onLeftButtonClick ?? call}
        disabled={disabled}
      >
        <FaPhoneAlt />
        <TextComp>{phoneNumber ?? "Phone Number"}</TextComp>
      </Button>

      {!hideRightButton && RenderCallBackButton()}
    </div>
  )

  function RenderCallBackButton() {
    return rightButtonTitle === "hero_call_button" ? (
      <ModalComp
        title="request_call_back"
        constent={
          <div className="pt-10">
            <FormComp inputs={inputs} schema={schema} onSubmit={onSubmit} />
          </div>
        }
        trigger={
          <Button
            className="bg-transparent border-b-[1px] border-prim hover:bg-transparent text-black hover:text-primMid w-full"
            onClick={onRightButtonClick}
          >
            <TextComp>{rightButtonTitle}</TextComp>
          </Button>
        }
      />
    ) : (
      <Button
        className="bg-transparent border-b-[1px] border-prim hover:bg-transparent text-black hover:text-primMid w-full"
        onClick={onRightButtonClick}
      >
        <TextComp>{rightButtonTitle}</TextComp>
      </Button>
    )
  }
}

const inputs = [
  {
    name: "email",
    type: "email",
    placeholder: "email",
  },
  {
    name: "phone_number",
    type: "number",
    placeholder: "phone",
  },
]
