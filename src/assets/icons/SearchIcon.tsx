import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const SearchIcon = (props: IIconProps) => {
  const {
    width = 20,
    height = 20,
    fillColor = 'transparent',
    strokeWidth = 1.6,
    strokeColor = DEFAULT_COLOR.GRAY_LIGHT,
  } = props;

  return (
    <Svg width={width} height={height} viewBox={'0 0 20 20'} fill={fillColor}>
      <Path
        d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
