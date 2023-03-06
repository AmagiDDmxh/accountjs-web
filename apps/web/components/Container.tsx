import clsx from "clsx"
import { ComponentProps } from "react"

export const Container = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}
