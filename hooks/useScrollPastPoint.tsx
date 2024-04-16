'use client'
import { useState, useEffect } from "react"

function useScrollPastPoint(yPosition: number) {
  const [pastPoint, setPastPoint] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > yPosition) {
        setPastPoint(true)
      } else {
        setPastPoint(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [yPosition])

  return pastPoint
}

export default useScrollPastPoint
