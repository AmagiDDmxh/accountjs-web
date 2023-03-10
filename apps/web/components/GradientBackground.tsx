import React, { useEffect, useRef } from "react"

const gradientFromColor = "#fc7b7b5e"
const gradientToColor = "#2fff5a2e"
const gradientScale = 100

export const GradientBackground = () => {
  const gradientRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!document || !window || !gradientRef.current) {
      return
    }
    const onMouseMove = (event: MouseEvent) => {
      const windowWidth = window.outerWidth
      const windowHeight = window.outerHeight

      const mouseXpercentage = Math.round(
        (event.pageX / windowWidth) * gradientScale,
      )
      const mouseYpercentage = Math.round(
        (event.pageY / windowHeight) * gradientScale,
      )

      gradientRef.current!.style.background = `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, ${gradientFromColor}, ${gradientToColor})`
    }
    document.addEventListener("mousemove", onMouseMove)

    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-full w-full z-[-2] bg-[#fc7b7b5e]"
      style={{
        background: `radial-gradient(at center, ${gradientFromColor}, ${gradientToColor})`,
      }}
      ref={gradientRef}
    >
      <div className="fixed z-0 w-[757px] h-[567px] left-[calc(50%-628px/2-170px)] top-2 bg-[rgba(253,92,156,.5)] opacity-20 filter blur-[150px]" />
      <div className="fixed z-0 w-[759px] h-[776px] left-10 bottom-0 bg-[rgba(135,105,255,.5)] opacity-30 filter blur-[150px]" />
    </div>
  )
}
