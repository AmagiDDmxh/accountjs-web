import { ComponentProps, useRef } from "react"
import cx from "clsx"
import Lottie, { LottieRef } from "lottie-react"
import mailLottie from "../images/lottie-icon/email.json"

type NavigationIcon = (props: ComponentProps<"svg">) => JSX.Element
type NavigationItem = {
  name: string
  href: string
  icon?: NavigationIcon
}
type Navigation = Record<string, NavigationItem[]>

const MailIcon = (props: any) => {
  const lottieRef: LottieRef = useRef(null)

  const handleMouseEnter = () => {
    lottieRef.current?.play()
  }

  const handleMouseLeave = () => {
    lottieRef.current?.stop()
  }

  return (
    <Lottie
      {...props}
      lottieRef={lottieRef}
      animationData={mailLottie}
      loop={false}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      interactivity={{
        actions: [
          {
            type: "play",
            frames: [0, 1],
          },
        ],
        mode: "cursor",
      }}
    />
  )
}

const navigation: Navigation = {
  social: [
    {
      name: "Twitter",
      href: "//twitter.com/accountjs_xyz",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "//github.com/accountjs",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Mirror",
      href: "//mirror.xyz/skyhighfeng.eth",
      icon: (props) => (
        <svg
          fill="currentColor"
          viewBox="0 0 144 185"
          {...props}
          className={cx(props.className, "transform scale-75")}
        >
          <path
            d="M0 71.6129C0 32.0622 32.0622 0 71.6129 0C111.164 0 143.226 32.0622 143.226 71.6129V174.118C143.226 180.128 138.354 185 132.343 185H10.8824C4.87222 185 0 180.128 0 174.118V71.6129Z"
            fill="url(#markGradient)"
          />
          <path
            clipRule="evenodd"
            d="M134.717 176.111V71.8216C134.717 36.8684 106.465 8.53326 71.6129 8.53326C36.7613 8.53326 8.50846 36.8684 8.50846 71.8216V176.111C8.50846 176.308 8.66719 176.467 8.86298 176.467H134.363C134.559 176.467 134.717 176.308 134.717 176.111ZM71.6129 0C32.0622 0 0 32.1556 0 71.8216V176.111C0 181.02 3.96809 185 8.86298 185H134.363C139.258 185 143.226 181.02 143.226 176.111V71.8216C143.226 32.1556 111.164 0 71.6129 0Z"
            fill="currentColor"
            fillRule="evenodd"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="markGradient"
              x1="18.435"
              x2="143.747"
              y1="10.6666"
              y2="209.447"
            >
              <stop offset="0.265625" stopColor="currentColor" />
              <stop offset="0.734375" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Mail",
      href: "mailto:team@accountjs.xyz",
      icon: MailIcon,
    },
  ],
}

export const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col items-center mx-auto max-w-7xl overflow-hidden pb-20 px-6 sm:pb-24 lg:px-8 space-y-6 md:space-y-4">
        <div className="flex justify-center">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black/30 hover:text-black/80 transition ease-in-out duration-200 p-3 md:p-2 md:mx-2"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon && (
                <item.icon
                  className="h-6 w-6 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
        </div>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 ">
          &copy; {new Date().getFullYear()} Account.js. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
