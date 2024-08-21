import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IBottomSheetProps} from './CustomBottomSheet.types';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './CustomBottomSheet.styles';

const CustomBottomSheet = (props: IBottomSheetProps) => {
  const {snapPoints = ['30%', '40%'], heading, icon, children, onClose} = props;

  const styles = generateStyles({});

  return (
    <BottomSheet
      snapPoints={snapPoints}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior={'close'}
          disappearsOnIndex={-1}
          onPress={onClose}
        />
      )}
      backgroundStyle={{
        backgroundColor: DEFAULT_COLOR.OFF_WHITE,
        borderWidth: 1,
        borderColor: DEFAULT_COLOR.GRAY_LIGHT,
      }}>
      <BottomSheetView style={styles.bottomSheetView}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.heading}>{heading}</Text>
            <TouchableRipple>{!!icon && icon}</TouchableRipple>
          </View>
          <View style={styles.horizontalLine} />
          {!!children && (
            <View style={styles.childrenContainer}>{children}</View>
          )}
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CustomBottomSheet;
