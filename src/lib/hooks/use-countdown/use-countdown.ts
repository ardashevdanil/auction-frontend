import { useEffect, useRef, useState } from "react"
import { secondsToHours, secondsToMinutes, hoursToSeconds, minutesToSeconds } from "date-fns";

export function useCountdown(toDate: number) {
  const [countdown, setCountdown] = useState("")
  const intervalId = useRef<number | null>(null)

  const calculateCountdown = () => {
    const diff = toDate - Date.now() / 1000
    const hours = secondsToHours(diff)
    const minutes = secondsToMinutes(diff - hoursToSeconds(hours))
    const seconds = Math.floor(diff - hoursToSeconds(hours) - minutesToSeconds(minutes))
    const duration = `${hours}:${minutes}:${seconds}`


    return duration
  }

  useEffect(() => {
    setCountdown(calculateCountdown())

    intervalId.current = window.setInterval(() => {
      setCountdown(calculateCountdown())
    }, 1000)

    return () => {
      window.clearInterval(intervalId.current!)
      intervalId.current = null
    }
  }, [])

  return [countdown]
}
