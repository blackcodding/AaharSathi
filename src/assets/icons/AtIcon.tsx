import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const AtIcon = (props: IIconProps) => {
  const {
    width = 28,
    height = 28,
    fillColor = DEFAULT_COLOR.WHITE,
    strokeWidth = 2,
    strokeColor = DEFAULT_COLOR.GRAY_MEDIUM,
  } = props;

  return (
    <Svg viewBox={'0 0 24 24'} width={width} height={height} fill={fillColor}>
      <Path
        d="M16 7.99987V12.9999C16 13.7955 16.3161 14.5586 16.8787 15.1212C17.4413 15.6838 18.2044 15.9999 19 15.9999C19.7957 15.9999 20.5587 15.6838 21.1213 15.1212C21.6839 14.5586 22 13.7955 22 12.9999V11.9999C21.9999 9.7429 21.2362 7.55235 19.8333 5.7844C18.4303 4.01645 16.4706 2.77509 14.2726 2.26217C12.0747 1.74924 9.76794 1.99491 7.72736 2.95923C5.68677 3.92356 4.03241 5.54982 3.03327 7.57359C2.03413 9.59736 1.74898 11.8996 2.22418 14.106C2.69938 16.3124 3.90699 18.2931 5.65064 19.7261C7.39429 21.1592 9.57144 21.9602 11.8281 21.999C14.0847 22.0378 16.2881 21.3121 18.08 19.9399M16 11.9999C16 14.209 14.2092 15.9999 12 15.9999C9.79087 15.9999 8.00001 14.209 8.00001 11.9999C8.00001 9.79073 9.79087 7.99987 12 7.99987C14.2092 7.99987 16 9.79073 16 11.9999Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};