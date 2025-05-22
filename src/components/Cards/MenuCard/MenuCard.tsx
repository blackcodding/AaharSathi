import {Image, Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {DefaultButton} from '../../Buttons/DefaultButton/DefaultButton';
import {IMenuCardProps} from './MenuCard.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyleSheet} from './MenuCard.styles';

export const MenuCard = (props: IMenuCardProps) => {
  const {
    image,
    icon,
    label,
    name,
    nameColor,
    shouldFlex,
    showButton = false,
    buttonLabel = '',
    handleMenuCardPress,
    onButtonPress,
  } = props;
  const styles = generateStyleSheet({shouldFlex, nameColor});
  return (
    <TouchableRipple
      borderless={true}
      onPress={handleMenuCardPress}
      style={styles.mainContainer}>
      <View style={styles.container}>
        {!!image && <Image style={styles.iconContainer} src={image} />}
        {!!icon && <View style={styles.iconContainer}>{icon}</View>}
        <View style={styles.titleContainer}>
          {!!label && <Text style={styles.label}>{label}</Text>}
          <Text style={styles.name}>{name}</Text>
        </View>
        {showButton && (
          <DefaultButton
            text={buttonLabel}
            colors={{
              textColor: DEFAULT_COLOR.WHITE,
              borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
              backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
            }}
            onPress={onButtonPress}
          />
        )}
      </View>
    </TouchableRipple>
  );
};
