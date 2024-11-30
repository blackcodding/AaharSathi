import {Path, Rect, Svg} from 'react-native-svg';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IIconProps} from './icon.types';
import React from 'react';

export const BellIcon = (props: IIconProps) => {
  const {
    width = 46,
    height = 46,
    fillColor = DEFAULT_COLOR.ALERT_LIGHT,
    strokeColor = DEFAULT_COLOR.ALERT_DARK,
    strokeWidth = 1.6,
  } = props;

  return (
    <Svg viewBox={'0 0 46 46'} width={width} height={height} fill={fillColor}>
      <Rect
        x={'3'}
        y={'3'}
        width={-6}
        height={height - 6}
        rx={'20'}
        fill={DEFAULT_COLOR.ALERT_LIGHT}
      />
      <Rect
        x={'3'}
        y={'3'}
        width={width - 6}
        height={height - 6}
        rx={'20'}
        stroke={DEFAULT_COLOR.WHITE}
        strokeWidth={strokeWidth * 4}
      />
      <Path
        d="M26.0384 28.0124C26.3958 29.3461 25.6043 30.7169 24.2707 31.0743C22.937 31.4317 21.5662 30.6402 21.2088 29.3065M14.7142 22.6779C14.3896 21.5127 14.7271 20.253 15.5908 19.4063M23.1221 17.7842C23.3756 17.3281 23.4591 16.7768 23.3134 16.233C23.0156 15.1216 21.8732 14.4621 20.7618 14.7599C19.6504 15.0577 18.9909 16.2 19.2887 17.3114C19.4344 17.8552 19.7824 18.2909 20.2299 18.5591M29.9327 18.6001C29.6312 17.4288 28.709 16.5066 27.5377 16.2051M27.5757 20.8712C27.2782 19.7611 26.4841 18.8328 25.3681 18.2905C24.252 17.7482 22.9054 17.6364 21.6245 17.9796C20.3436 18.3228 19.2333 19.093 18.5379 20.1206C17.8425 21.1483 17.619 22.3493 17.9164 23.4594C18.4086 25.2961 18.313 26.7614 18.0022 27.8749C17.648 29.1439 17.4709 29.7784 17.5187 29.9058C17.5735 30.0516 17.6131 30.0916 17.7583 30.1479C17.8852 30.1971 18.4183 30.0542 19.4846 29.7685L29.3722 27.1191C30.4384 26.8334 30.9716 26.6906 31.0569 26.5845C31.1545 26.4632 31.1688 26.4088 31.1433 26.2551C31.1211 26.1209 30.6504 25.6599 29.7091 24.738C28.8833 23.9291 28.0678 22.7079 27.5757 20.8712Z"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
      />
    </Svg>
  );
};
