import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const Pause = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <Rect width={7} height={32} x={9} y={4.488} fill="#383344" rx={3.5} />
    <Rect width={7} height={32} x={24} y={4.488} fill="#383344" rx={3.5} />
  </Svg>
)
export default Pause
