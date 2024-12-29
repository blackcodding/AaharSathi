import {IFeedbackScreenProps} from './FeedbackScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './FeedbackScreen.styles';

const FeedbackScreen = (props: IFeedbackScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return <View style={styles.mainContainer}>{}</View>;
};

export default FeedbackScreen;
