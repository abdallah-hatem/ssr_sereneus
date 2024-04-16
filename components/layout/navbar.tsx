import React, { useEffect, useState } from "react"
import { FaBars, FaPhoneAlt } from "react-icons/fa"
import { Button } from "../ui/button"
import { FaXmark } from "react-icons/fa6"
import useWindowWidth from "../../hooks/useWidth"
import useScrollPastPoint from "../../hooks/useScrollPastPoint"
import { useTranslation } from "react-i18next"
import TextComp from "../ui/textComp"

export default function Navbar() {
  const windowWidth = useWindowWidth()
  const thershold = useScrollPastPoint(100)
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)

  useEffect(() => {
    if (windowWidth > 800) setDrawerOpen(false)
  }, [windowWidth])

  const links = [
    { name: "Home", url: "/" },
    { name: "Agencies", url: "/agencies" },
  ]

  const langBtns = [
    {
      name: "PT",
      lang: "pt",
      onClick: () => {
        i18n.changeLanguage("pt")
        localStorage.setItem("lang", "pt")
      },
    },
    { comp: <p>/</p> },
    {
      name: "EN",
      lang: "en",
      onClick: () => {
        i18n.changeLanguage("en")
        localStorage.setItem("lang", "en")
      },
    },
  ]

  return (
    <>
      <nav
        id="navbar"
        className={`bg-sec ${thershold && "bg-white shadow-md"}
        flex flex-row justify-between items-center px-10 h-[70px] fixed w-full transition-all duration-300 z-50`}
      >
        <a href="/" className="hover:cursor-pointer">
          <img src="/images/Sereneus-02.png" alt="logo" className="w-[150px]" />
        </a>
        {RenderLinks()}

        {RenderRight()}
      </nav>

      {RenderMobDrawer()}
    </>
  )

  function RenderLinks() {
    return (
      windowWidth > 800 && (
        <ul className="flex flex-row space-x-3">
          {links.map((el, index) => (
            <li
              key={index}
              className={`hover:text-primMid transition-all duration-300 ${
                window.location.pathname === el.url
                  ? "text-black"
                  : "text-gray-500"
              }`}
            >
              <a href={el.url}>
                <TextComp>{el.name}</TextComp>
              </a>
            </li>
          ))}
        </ul>
      )
    )
  }
  function RenderRight() {
    return (
      <div className="flex items-center space-x-5">
        <Button className="flex items-center space-x-2 bg-transparent text-black hover:bg-primMid max-[450px]:hidden">
          <FaPhoneAlt />
          <TextComp>{"general_phone_number"}</TextComp>
        </Button>

        {/* lang buttons / mob menu */}
        {windowWidth > 800 ? (
          <div className="flex flex-row items-center space-x-2">
            {langBtns.map((el, index) =>
              !el.comp ? (
                <Button
                  className={`bg-transparent text-gray-500 ${
                    i18n.language === el.lang && "text-prim"
                  }  p-0 h-fit hover:text-primDark hover:bg-transparent`}
                  key={index}
                  onClick={el.onClick}
                >
                  {el.name}
                </Button>
              ) : (
                <div key={index}>{el.comp}</div>
              )
            )}
          </div>
        ) : (
          <Button
            className="hover:cursor-pointer hover:bg-transparent p-0 h-fit bg-transparent text-black"
            onClick={() => setDrawerOpen((prev) => !prev)}
          >
            {!drawerOpen ? (
              <FaBars size={20} />
            ) : (
              <FaXmark size={20} className="scale-[1.3]" />
            )}
          </Button>
        )}
      </div>
    )
  }
  function RenderMobDrawer() {
    return (
      drawerOpen && (
        <div className="bg-sec px-10 py-5 pt-[70px] w-full top-[70px] fixed shadow-md transition-all duration-300 ease-in-out z-50">
          <ul className="flex flex-col space-y-5">
            {links.map((el, index) => (
              <li
                key={index}
                className={`border-b-[1px] border-gray-400 hover:text-primMid transition-all duration-300 ${
                  window.location.pathname === el.url
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                <a href={el.url}>
                  <TextComp>{el.name}</TextComp>
                </a>
              </li>
            ))}
          </ul>

          {/* lang buttons */}
          <div className="flex flex-row items-center space-x-2 mt-5">
            {langBtns.map((el, index) =>
              !el.comp ? (
                <Button
                  className={`bg-transparent text-gray-500 ${
                    i18n.language === el.lang && "text-prim"
                  } text-lg p-0 h-fit hover:text-primDark hover:bg-transparent`}
                  key={index}
                  onClick={el.onClick}
                >
                  {el.name}
                </Button>
              ) : (
                <div key={index}>{el.comp}</div>
              )
            )}
          </div>

          {/* Phone button */}
          <Button className="mt-16 flex items-center space-x-2 bg-prim text-black hover:bg-primMid rounded-3xl w-full">
            <FaPhoneAlt />
            <TextComp>{"general_phone_number"}</TextComp>
          </Button>
        </div>
      )
    )
  }
}
