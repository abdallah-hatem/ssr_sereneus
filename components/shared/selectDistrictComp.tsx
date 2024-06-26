"use client"

import { RootState } from "@/app/globalRedux/store"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import TextComp from "../ui/textComp"
import { Button } from "../ui/button"
import { FaChevronRight } from "react-icons/fa"
import {
  setSelectedDistrict,
  setSelectedMaunicipality,
} from "@/app/globalRedux/features/district/districtSlice"

interface Props {
  icon?: boolean
  data: any[]
  type?: "district" | "municipality"
}

export default function SelectDistrictComp({
  icon = true,
  data,
  type = "district",
}: Props) {
  const dispatch = useDispatch()
  const { selectedDistrict } = useSelector((state: RootState) => state.district)
  const { selectedMaunicipality } = useSelector(
    (state: RootState) => state.district
  )

  const [opened, setOpened] = useState(false)

  console.log(selectedMaunicipality, "selectedMaunicipality")
  console.log(selectedDistrict, "selectedDistrict")

  function getMaunicipalityName() {
    if (type === "municipality" && selectedMaunicipality) {
      return selectedMaunicipality
    }

    return "choose_municipality"
  }

  function getDistrictName() {
    if (type === "district" && selectedDistrict) {
      return selectedDistrict
    }

    return "choose_district"
  }

  return (
    <DropdownMenu onOpenChange={(e: boolean) => setOpened(e)} open={opened}>
      {/* Trigger */}
      <div className="bg-white hover:bg-white px-3 h-11 rounded-3xl w-full w-full text-left flex justify-between items-center text-black border-[1px] border-gray-400">
        <DropdownMenuTrigger className="w-full h-full">
          <TextComp
            className={`${
              type === "district" && selectedDistrict
                ? "text-black"
                : type === "municipality" && selectedMaunicipality
                ? "text-black"
                : "text-gray-400"
            } text-start`}
          >
            {type === "district" ? getDistrictName() : getMaunicipalityName()}
          </TextComp>
        </DropdownMenuTrigger>
        {icon && (
          <Button
            className="bg-prim p-[7px] rounded-full h-fit text-black"
            onClick={() =>
              // type === "district" && selectedDistrict && router(`/agencies`)
              ""
            }
          >
            <FaChevronRight />
          </Button>
        )}
      </div>

      {/* Content */}
      <DropdownMenuContent className="max-h-[300px] overflow-y-scroll w-[300px] sm:w-[480px]">
        {data &&
          data.map((el, index) => (
            <DropdownMenuItem
              className="hover:bg-gray-200 cursor-pointer"
              key={index}
              onClick={() => {
                type === "district" &&
                  dispatch(setSelectedDistrict(el.suggestion))

                type === "municipality" &&
                  dispatch(setSelectedMaunicipality(el.suggestion))
              }}
              // style={{ borderBottom: "1px solid #ddd", width: "100%" }} // Assegura que as opções tenham a mesma largura do botão
            >
              {el.suggestion}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// const districts = [
//   "Aveiro",
//   "Beja",
//   "Braga",
//   "Bragança",
//   "Castelo Branco",
//   "Coimbra",
//   "Évora",
//   "Faro",
//   "Guarda",
//   "Leiria",
//   "Lisboa",
//   "Portalegre",
//   "Porto",
//   "Santarém",
//   "Setúbal",
//   "Viana do Castelo",
//   "Vila Real",
//   "Viseu",
// ]
