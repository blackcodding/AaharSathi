import {Image, Text, View} from 'react-native';

import {IBannerCardProps} from './BannerCard.types';
import React from 'react';
import {commonStyles} from '../commonStyles';
import {generateStyles} from './BannerCard.styles';

const BannerCard = (props: IBannerCardProps) => {
  const {heading = ''} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={commonStyles.gifContainer}>
        <Image
          source={require('../../assets/Gif/Alert.gif')}
          style={commonStyles.gif}
        />
      </View>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default BannerCard;
