"use client"
import React from "react"
import { useTranslation } from "react-i18next"

export default function TextComp({ children, type = "p", ...props }: any) {
  const { t } = useTranslation()

  return (
    <div>
      {typeof children === "string" ? (
        <div>
          {t(children as string)
            .split("\n")
            .map((item: any, index: number) =>
              React.createElement(type, { ...props, key: index }, item)
            )}
        </div>
      ) : (
        children
      )}
    </div>
  )
}
