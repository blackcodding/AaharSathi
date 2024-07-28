import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IIconProps} from '../icon.types';
import React from 'react';

export const ExpiringSoonIcon = (props: IIconProps) => {
  const {
    width = 24,
    height = 24,
    fillColor = DEFAULT_COLOR.WHITE,
    strokeWidth = 2,
    strokeColor = DEFAULT_COLOR.BLUE_DARK,
  } = props;

  return (
    <Svg viewBox={'0 0 24 24'} width={width} height={height} fill={fillColor}>
      <Path
        d="M11 7V11M11 15H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
