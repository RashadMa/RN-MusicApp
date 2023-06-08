import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Prev = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M28.375 25.172c0 2.171-2.433 3.454-4.224 2.227L7.966 16.308a2.698 2.698 0 0 1-.015-4.44L24.137.61c1.787-1.244 4.238.038 4.238 2.215v22.346ZM.625 26.72a1.156 1.156 0 0 0 2.313 0V1.28a1.156 1.156 0 1 0-2.313 0V26.72Z"
    />
  </Svg>
)
export default Prev
