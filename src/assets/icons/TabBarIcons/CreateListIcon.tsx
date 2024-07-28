import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {IIconProps} from '../icon.types';
import React from 'react';

export const CreateListIcon = (props: IIconProps) => {
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
        d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
