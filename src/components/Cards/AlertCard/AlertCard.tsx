import {Text, View} from 'react-native';

import {BellIcon} from '../../../assets/icons/BellIcon';
import {DEFAULT_COLOR} from '../../../Theme/Theme';
import {DefaultButton} from '../../Buttons/DefaultButton/DefaultButton';
import {IAlertCardProps} from './AlertCard.types';
import React from 'react';
import {generateStyles} from './AlertCard.styles';

const AlertCard = (props: IAlertCardProps) => {
  const {
    title = 'Update Available',
    description = 'Get the latest features now',
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
          text={'Update'}
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
