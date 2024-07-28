import {Text, View} from 'react-native';

import {CrossIcon} from '../../assets/icons/CrossIcon';
import {IPopUpProps} from './PopUp.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './PopUp.styles';

export const PopUp = (props: IPopUpProps) => {
  const {text = 'Warning!!', subtext, onClosePress} = props;
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.popUpContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.text}>{text}</Text>
          <TouchableRipple
            borderless={true}
            onPress={onClosePress}
            style={styles.icon}>
            <CrossIcon />
          </TouchableRipple>
        </View>
        {!!subtext && <Text style={styles.subText}>{subtext}</Text>}
      </View>
    </View>
  );
};
