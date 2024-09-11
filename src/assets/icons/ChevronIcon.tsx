import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const ChevronIcon = (props: IIconProps) => {
  const {
    width = 20,
    height = 20,
    fillColor = DEFAULT_COLOR.WHITE,
    strokeColor = DEFAULT_COLOR.GRAY_DARK,
    strokeWidth = 1.6,
  } = props;

  return (
    <Svg viewBox={'0 0 20 20'} width={width} height={height} fill={fillColor}>
      <Path
        d="M7.5 15L12.5 10L7.5 5"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
