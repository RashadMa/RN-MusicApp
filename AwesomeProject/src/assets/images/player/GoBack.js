import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const GoBack = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={39}
    fill="none"
    {...props}
  >
    <Rect
      width={37.756}
      height={37.756}
      x={0.622}
      y={0.622}
      fill="#000"
      rx={18.878}
    />
    <Path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.756}
      d="m18.45 11.972-.004.004-6.291 6.217a1.26 1.26 0 0 0 0 1.79l6.291 6.217a1.083 1.083 0 0 0 1.522-1.54l-4.543-4.489h11.536a1.082 1.082 0 1 0 0-2.165H15.424l4.544-4.49.004-.005a1.083 1.083 0 0 0-1.522-1.54Z"
    />
    <Rect
      width={37.756}
      height={37.756}
      x={0.622}
      y={0.622}
      stroke="#D9D9D9"
      strokeWidth={0.756}
      rx={18.878}
    />
  </Svg>
)
export default GoBack
