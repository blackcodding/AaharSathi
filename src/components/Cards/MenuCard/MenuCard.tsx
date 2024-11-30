import {Image, Text, View} from 'react-native';

import {IMenuCardProps} from './MenuCard.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyleSheet} from './MenuCard.styles';
import {DefaultButton} from '../../Buttons/DefaultButton/DefaultButton';
import {DEFAULT_COLOR} from '../../../Theme/Theme';

export const MenuCard = (props: IMenuCardProps) => {
  const {
    image,
    icon,
    label,
    name,
    shouldFlex,
    showButton = false,
    buttonLabel = '',
    handleMenuCardPress,
    onButtonPress,
  } = props;
  const styles = generateStyleSheet({shouldFlex});
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
              borderColor: DEFAULT_COLOR.GREEN_MEDIUM,
              backgroundColor: DEFAULT_COLOR.GREEN_MEDIUM,
            }}
            onPress={onButtonPress}
          />
        )}
      </View>
    </TouchableRipple>
  );
};
