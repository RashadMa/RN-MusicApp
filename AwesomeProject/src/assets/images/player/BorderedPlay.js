import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const BorderedPlay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <Rect width={68} height={68} x={1} y={1} fill="#fff" rx={21} />
    <Path
      fill="#000"
      d="M21.582 23.863c0-2.826 2.985-4.623 5.435-3.273l20.206 11.137c2.56 1.412 2.56 5.135 0 6.545L27.017 49.41c-2.45 1.35-5.434-.447-5.434-3.272V23.863Z"
    />
    <Rect
      width={68}
      height={68}
      x={1}
      y={1}
      stroke="#000"
      strokeWidth={2}
      rx={21}
    />
  </Svg>
)
export default BorderedPlay
