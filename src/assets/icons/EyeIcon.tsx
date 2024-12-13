import {Path, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const EyeIcon = (props: IIconProps) => {
  const {
    width = 24,
    height = 24,
    fillColor = DEFAULT_COLOR.WHITE,
    strokeWidth = 2,
    strokeColor = DEFAULT_COLOR.GRAY_LIGHT,
  } = props;

  return (
    <Svg viewBox={'0 0 24 24'} width={width} height={height} fill={fillColor}>
      <Path
        d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
