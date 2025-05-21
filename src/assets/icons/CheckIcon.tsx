import * as React from 'react';

import Svg, {Path} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';

export const CheckIcon = (props: IIconProps) => {
  const {
    width = 24,
    height = 24,
    fillColor = DEFAULT_COLOR.OFF_WHITE,
    strokeWidth = 2,
    strokeColor = DEFAULT_COLOR.GREEN_DARK,
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
        d="M20 6L9 17L4 12"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
      />
    </Svg>
  );
};
