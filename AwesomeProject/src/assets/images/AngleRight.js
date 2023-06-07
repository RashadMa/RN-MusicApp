import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
const AngleRight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={20}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19.792 7.5-6.25-6.25m6.25 6.25-6.25 6.25m6.25-6.25H5.208"
        shapeRendering="crispEdges"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default AngleRight
