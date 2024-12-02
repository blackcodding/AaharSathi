import {IBackHeaderProps} from './BackHeader.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './BackHeader.styles';
import {LeftArrowIcon} from '../../assets/icons/LeftArrowIcon';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const BackHeader = (props: IBackHeaderProps) => {
  const {onIconPress} = props;

  const styles = generateStyles({});
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <TouchableRipple
        onPress={
          onIconPress
            ? onIconPress
            : () => {
                navigation.goBack();
              }
        }>
        <LeftArrowIcon />
      </TouchableRipple>
      <Text style={styles.title}>{'Profile Setting'}</Text>
    </View>
  );
};

export default BackHeader;
