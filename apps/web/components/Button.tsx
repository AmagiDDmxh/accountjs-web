import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import * as SlotPrimitive from "@radix-ui/react-slot"
import cx from "clsx"

type Colors = "cyan" | "white" | "gray"
type Styles = "solid" | "outline"

const baseStyles = {
  solid:
    "inline-flex items-center justify-center rounded-full border border-transparent px-3 py-2 text-sm font-semibold outline-2 outline-offset-2 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
} as const

const variantStyles: Record<Styles, Partial<Record<Colors, string>>> = {
  solid: {
    cyan: "relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-cyan-900 hover:bg-white/90 active:bg-white/90 active:text-cyan-900/70",
    gray: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
  },
  outline: {
    gray: "border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
  },
}

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: Styles
  color?: Colors
  asChild?: boolean
}

export const Button = forwardRef<ElementRef<"button">, ButtonProps>(
  function Button(
    { asChild, variant = "solid", color = "gray", className, ...props },
    ref,
  ) {
    const classNames = cx(
      baseStyles[variant],
      variantStyles[variant][color],
      className,
    )

    return asChild ? (
      <SlotPrimitive.Slot ref={ref} {...props} className={classNames}>
        <SlotPrimitive.Slottable>{props.children}</SlotPrimitive.Slottable>
      </SlotPrimitive.Slot>
    ) : (
      <button ref={ref} className={classNames} {...props}>
        {props.children}
      </button>
    )
  },
)
