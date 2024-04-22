
import {IHelpCardProps} from './HelpCard.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './HelpCard.styles';

const HelpCard = (props: IHelpCardProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default HelpCard;
