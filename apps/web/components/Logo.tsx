import { ComponentProps } from "react"
import cx from "clsx"

export const Logo = (props: ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cx(
        "flex items-center gap-2 text-gray-700 transition-all delay-75 hover:text-black hover:delay-[0ms]",
        props.className,
      )}
    >
      <span className="text-lg font-medium">Account.js</span>
    </div>
  )
}
