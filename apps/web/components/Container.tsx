import { ComponentProps } from "react"
import cx from "clsx"

export const Container = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    />
  )
}
