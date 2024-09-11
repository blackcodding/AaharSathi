import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const CalenderIcon = (props: IIconProps) => {
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
        d="M17.5 8.33329H2.5M13.3333 1.66663V4.99996M6.66667 1.66663V4.99996M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8211 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7334 17.5 14.3333V7.33329C17.5 5.93316 17.5 5.2331 17.2275 4.69832C16.9878 4.22791 16.6054 3.84546 16.135 3.60578C15.6002 3.33329 14.9001 3.33329 13.5 3.33329H6.5C5.09987 3.33329 4.3998 3.33329 3.86502 3.60578C3.39462 3.84546 3.01217 4.22791 2.77248 4.69832C2.5 5.2331 2.5 5.93316 2.5 7.33329V14.3333C2.5 15.7334 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8211 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
