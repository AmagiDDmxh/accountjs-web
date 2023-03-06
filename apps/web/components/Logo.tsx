import { ComponentProps } from "react"

export const Logo = (props: ComponentProps<"div">) => {
  return (
    <div className="flex items-center gap-2" {...props}>
      <span className="text-lg font-medium">Account.js</span>
    </div>
  )
}
