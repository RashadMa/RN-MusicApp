import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RepeatOnce = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#1C274C"
      d="M9.5 19.75a.75.75 0 0 0 0-1.5v1.5ZM11 5v.75a.75.75 0 0 0 .53-1.28L11 5ZM9.53 2.47a.75.75 0 0 0-1.06 1.06l1.06-1.06ZM9.5 18.25H9v1.5h.5v-1.5ZM9 5.75h2v-1.5H9v1.5Zm2.53-1.28-2-2-1.06 1.06 2 2 1.06-1.06ZM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12h-1.5Zm1.5 0A6.25 6.25 0 0 1 9 5.75v-1.5A7.75 7.75 0 0 0 1.25 12h1.5Z"
    />
    <Path
      fill="#1C274C"
      d="M13 19v-.75a.75.75 0 0 0-.53 1.28L13 19Zm1.47 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm.03-17.28a.75.75 0 0 0 0 1.5v-1.5Zm.5 14h-2v1.5h2v-1.5Zm-2.53 1.28 2 2 1.06-1.06-2-2-1.06 1.06ZM14.5 5.75h.5v-1.5h-.5v1.5ZM21.25 12A6.25 6.25 0 0 1 15 18.25v1.5A7.75 7.75 0 0 0 22.75 12h-1.5Zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5A6.25 6.25 0 0 1 21.25 12h1.5Z"
      opacity={0.5}
    />
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.5 11.5 12 10v4"
    />
  </Svg>
)
export default RepeatOnce
