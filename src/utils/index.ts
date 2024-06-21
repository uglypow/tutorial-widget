import { TOUR_LIST } from "@/constants/steps"
import { Step } from "react-joyride"

export function getStepFromLocation(url) {
  try {
    const urlObj = new URL(url)
    const pathSegments = urlObj.pathname
      .split("/")
      .filter((segment) => segment !== "")
    const pageName = pathSegments[pathSegments.length - 1]
    return getStepByName(pageName)
  } catch (error) {
    console.error("Invalid URL:", error)
    return null
  }
}

export function getStepByName(name: string): Step[] | undefined {
  const tour = TOUR_LIST.find((tour) => tour.name === name)
  console.log("founded tour: ", tour)
  if (tour) {
    return tour.steps
  } else console.warn("Tour not founded")
}
