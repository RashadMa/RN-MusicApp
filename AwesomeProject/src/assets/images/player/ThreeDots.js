import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ThreeDots = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10.667 16a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0Zm8 0a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0ZM24 18.667a2.667 2.667 0 1 0 0-5.334 2.667 2.667 0 0 0 0 5.334Z"
    />
  </Svg>
)
export default ThreeDots
