import {IFeedbackCardProps} from './FeedbackCard.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './FeedbackCard.styles';

const FeedbackCard = (props: IFeedbackCardProps) => {
  const {} = props;

  const styles = generateStyles({});

  return <View style={styles.mainContainer}>{}</View>;
};

export default FeedbackCard;
