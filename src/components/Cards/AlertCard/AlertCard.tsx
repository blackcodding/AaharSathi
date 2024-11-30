import {IAlertCardProps} from './AlertCard.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './AlertCard.styles';
import {BellIcon} from '../../../assets/icons/BellIcon';
import {DefaultButton} from '../../Buttons/DefaultButton/DefaultButton';
import {DEFAULT_COLOR} from '../../../Theme/Theme';

const AlertCard = (props: IAlertCardProps) => {
  const {
    title = 'New version is available',
    description = 'Update now to get latest features',
    onPress,
  } = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <BellIcon />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <DefaultButton
          text={'Update Now'}
          colors={{
            textColor: DEFAULT_COLOR.WHITE,
            borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
            backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
          }}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default AlertCard;
