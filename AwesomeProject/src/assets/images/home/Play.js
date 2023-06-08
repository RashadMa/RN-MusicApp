import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Play = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M1 11C1 4.925 5.925 0 12 0s11 4.925 11 11-4.925 11-11 11S1 17.075 1 11Zm8.528-4.882a1 1 0 0 1 1.027.05l6 4a.998.998 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 15V7a1 1 0 0 1 .528-.882Z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default Play
