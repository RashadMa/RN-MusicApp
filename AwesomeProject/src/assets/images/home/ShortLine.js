import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ShortLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={152}
    height={4}
    fill="none"
    {...props}
  >
    <Path
      stroke="#FF6B00"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M150.986 3.392C66.95-1.553.988 2.598.988 2.598"
    />
  </Svg>
)
export default ShortLine
