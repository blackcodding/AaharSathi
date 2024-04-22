import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';

export const PencilIcon = (props: IIconProps) => {
  const {
    width = 30,
    height = 30,
    fillColor = DEFAULT_COLOR.BLACK,
    strokeWidth = 0.8,
    strokeColor = DEFAULT_COLOR.WHITE,
  } = props;
  return (
    <Svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={fillColor}
      strokeWidth={strokeWidth}
      stroke={strokeColor}>
      <Path
        d={
          'M16 10.667L13.334 8M5.667 18.333l2.256-.25c.276-.03.414-.046.543-.088.114-.037.223-.09.323-.155.113-.075.211-.173.407-.37L18 8.668A1.886 1.886 0 1015.334 6l-8.805 8.804c-.196.196-.294.294-.368.407-.066.1-.119.21-.156.324-.041.129-.057.267-.087.542l-.251 2.256z'
        }
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
