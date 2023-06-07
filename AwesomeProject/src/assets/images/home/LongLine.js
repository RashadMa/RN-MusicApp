import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LongLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={189}
    height={7}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF6B00"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M187.996 5.492C83.798-1.81 1.999 4.508 1.999 4.508"
    />
  </Svg>
)
export default LongLine
