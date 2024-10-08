import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const CrossIcon = (props: IIconProps) => {
  const {
    width = 24,
    height = 24,
    fillColor = DEFAULT_COLOR.RED_DARK,
    strokeColor = DEFAULT_COLOR.BLACK,
    strokeWidth = 2,
  } = props;

  return (
    <Svg viewBox={'0 0 24 24'} width={width} height={height} fill={fillColor}>
      <Path
        d="M18 6L6 18M6 6L18 18"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
