import { useEffect, useState } from "react"
import cx from "clsx"
import { jb } from "@/lib/css"

const pauseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <title>Pause</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
)
const playIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <title>Play</title>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
  </svg>
)
const replayIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <title>Replay</title>
    <g>
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <g />
      <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z" />
    </g>
  </svg>
)

function pad(pad: unknown, val: number) {
  return pad ? String(val).padStart(2, "0") : val
}

const duration = 60

export const Timer = () => {
  const [remaining, setRemaining] = useState(0)
  const [end, setEnd] = useState<number | null>(null)

  const min = Math.floor(remaining / 60 / 1000)
  const sec = pad(min, Math.floor((remaining / 1000) % 60))
  const hun = pad(true, Math.floor((remaining % 1000) / 10))
  const time = min ? `${min}:${sec}` : `${sec}.${hun}`

  const running = end && remaining

  useEffect(() => {
    const renderFrame: FrameRequestCallback = () => {
      if (running) {
        setRemaining(Math.max(0, end! - Date.now()))
        requestAnimationFrame(renderFrame)
      }
    }
    requestAnimationFrame(renderFrame)
  }, [end, running])

  const pause = () => {
    setEnd(null)
  }
  const start = () => {
    setEnd(Date.now() + remaining)
  }
  const reset = () => {
    setRemaining(duration * 1000)
    setEnd(running ? Date.now() + remaining : null)
  }

  return (
    <div className={cx("mx-auto w-48", jb.className)}>
      {time}
      <footer className="">
        {remaining === 0 ? (
          ""
        ) : running ? (
          <span onClick={pause}>{pauseIcon}</span>
        ) : (
          <span onClick={start}>{playIcon}</span>
        )}
        <span onClick={reset}>{replayIcon}</span>
      </footer>
    </div>
  )
}
