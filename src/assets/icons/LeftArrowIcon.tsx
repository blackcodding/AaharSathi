import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const LeftArrowIcon = (props: IIconProps) => {
  const {
    width = 24,
    height = 24,
    fillColor = DEFAULT_COLOR.WHITE,
    strokeWidth = 2,
    strokeColor = DEFAULT_COLOR.BLACK,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={'0 0 24 24'} fill={fillColor}>
      <Path
        d="M20 12H4M4 12L10 18M4 12L10 6"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
