"use client"
import { useState, useEffect } from "react"

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  useEffect(() => {
    // Function to update window width state
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Add event listener to update window width when resized
    window.addEventListener("resize", handleResize)

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowWidth
}

export default useWindowWidth
