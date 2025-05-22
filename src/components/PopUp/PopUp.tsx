import React, {useState} from 'react';
import {Text, View} from 'react-native';

import {CrossIcon} from '../../assets/icons/CrossIcon';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {DefaultButton} from '../Buttons/DefaultButton/DefaultButton';
import {IPopUpProps} from './PopUp.types';
import {Portal} from '@gorhom/portal';
import {StartIcon} from '../../assets/icons/StartIcon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './PopUp.styles';

export const PopUp = (props: IPopUpProps) => {
  const {
    title = 'Title',
    text,
    subtext,
    enableRating = false,
    onClosePress,
    onSubmitRating,
  } = props;

  const [selectedStar, setSelectedStar] = useState({
    id: 0,
    fillColor: DEFAULT_COLOR.WHITE,
  });

  const styles = generateStyles();

  const startData = [
    {
      id: 1,
      fillColor: DEFAULT_COLOR.ALERT_DARK,
    },
    {
      id: 2,
      fillColor: DEFAULT_COLOR.ALERT_DARK,
    },
    {
      id: 3,
      fillColor: DEFAULT_COLOR.ALERT_MEDIUM,
    },
    {
      id: 4,
      fillColor: DEFAULT_COLOR.ALERT_MEDIUM,
    },
    {
      id: 5,
      fillColor: DEFAULT_COLOR.GREEN_LIGHT,
    },
  ];

  return (
    <Portal>
      <View style={styles.mainContainer}>
        <View style={styles.popUpContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.title}>{title}</Text>
            <TouchableRipple
              borderless={true}
              onPress={onClosePress}
              style={styles.icon}>
              <CrossIcon strokeColor={DEFAULT_COLOR.RED_DARK} />
            </TouchableRipple>
          </View>
          {!!text && <Text style={styles.text}>{text}</Text>}
          {!!subtext && <Text style={styles.subText}>{subtext}</Text>}
          {!!enableRating && (
            <View style={styles.ratingContainer}>
              <View style={styles.starContainer}>
                {startData.map((star: any) => {
                  return (
                    <TouchableOpacity
                      key={star.id}
                      activeOpacity={0.7}
                      onPress={() => {
                        setSelectedStar(star);
                      }}>
                      <StartIcon
                        fillColor={
                          star.id <= selectedStar.id
                            ? selectedStar?.fillColor
                            : DEFAULT_COLOR.WHITE
                        }
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
              <DefaultButton
                text={'Submit'}
                onPress={() => {
                  onSubmitRating && onSubmitRating(selectedStar.id);
                }}
              />
            </View>
          )}
        </View>
      </View>
    </Portal>
  );
};
