import BottomSheet, {BottomSheetBackdrop} from '@gorhom/bottom-sheet';
import {
  NativeViewGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {IBottomSheetProps} from './CustomBottomSheet.types';
import {Portal} from '@gorhom/portal';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import {generateStyles} from './CustomBottomSheet.styles';

const CustomBottomSheet = (props: IBottomSheetProps) => {
  const {
    snapPoints = ['43%', '45%'],
    heading,
    icon,
    children,
    onClose,
    onIconPress,
  } = props;

  const styles = generateStyles({});

  return (
    <Portal>
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
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <TouchableRipple
            borderless={true}
            onPress={onIconPress}
            style={styles.icon}>
            {!!icon && icon}
          </TouchableRipple>
        </View>
        <View style={styles.horizontalLine} />
        <NativeViewGestureHandler>
          <ScrollView style={styles.bottomSheetContainer}>
            {!!children && (
              <View style={styles.childrenContainer}>{children}</View>
            )}
          </ScrollView>
        </NativeViewGestureHandler>
      </BottomSheet>
    </Portal>
  );
};

export default CustomBottomSheet;
