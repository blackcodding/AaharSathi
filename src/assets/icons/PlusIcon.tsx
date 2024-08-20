import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const PlusIcon = (props: IIconProps) => {
  const {
    width = 28,
    height = 28,
    fillColor = DEFAULT_COLOR.WHITE,
    strokeWidth = 2,
    strokeColor = DEFAULT_COLOR.GRAY_DARK,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={'0 0 20 20'} fill={fillColor}>
      <Path
        d={'M10.0003 4.16669V15.8334M4.16699 10H15.8337'}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
