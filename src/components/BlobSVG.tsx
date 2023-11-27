import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BlobSVG = ({size = '20',color="#FC8F8D"}) => (
  <Svg viewBox="0 0 200 200" width={size} height={size}>
    <Path
      fill={`${color}`}
      d="M69.3,-20.1C77.9,4,64.8,37.6,41.3,54C17.9,70.3,-16,69.5,-36.7,53.7C-57.5,37.8,-65.2,7.1,-56.9,-16.6C-48.6,-40.4,-24.3,-57.1,3,-58.1C30.3,-59.1,60.7,-44.3,69.3,-20.1Z"
      transform="translate(100 100)"
    />
  </Svg>
);
export  {BlobSVG};
