import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const RepeatOnce = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" {...props}>
    <G
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <Path d="M10.575 43.203A17.367 17.367 0 0 1 10 38.757V37.65c0-9.464 7.575-17.136 16.92-17.136h30.908M60.494 25.979A17.38 17.38 0 0 1 62 33.082v1.114c0 9.515-7.603 17.229-16.98 17.229h-16.4M57.828 20.514 49.643 12.3M49.643 28.727l8.185-8.213M16.647 46.472l2.979-2.231V55" />
    </G>
  </Svg>
)
export default RepeatOnce
