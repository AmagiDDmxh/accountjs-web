import React, { useEffect, useRef } from "react"
import gradientStyles from "./GradientBackground.module.css"

const gradientFromColor = "#fc7b7b5e"
const gradientToColor = "#2fff5a2e"

export const GradientBackground = () => {
  const gradientRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!document || !window || !gradientRef.current) {
      return
    }
    const onMouseMove = (event: MouseEvent) => {
      const windowWidth = window.outerWidth
      const windowHeight = window.outerHeight

      const mouseXpercentage = Math.round((event.pageX / windowWidth) * 100)
      const mouseYpercentage = Math.round((event.pageY / windowHeight) * 100)

      gradientRef.current!.style.background = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, ${gradientFromColor}, ${gradientToColor})`
    }
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return <div className={gradientStyles.gradient} ref={gradientRef} />
}
