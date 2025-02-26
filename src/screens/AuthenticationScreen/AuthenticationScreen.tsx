import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {RefObject, useRef, useState} from 'react';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {IAuthenticationScreenProps} from './AuthenticationScreen.types';
import {TouchableRipple} from 'react-native-paper';
import {commonStyles} from '../../components/commonStyles';
import {generateStyles} from './AuthenticationScreen.styles';
import {useNavigation} from '@react-navigation/native';

const AuthenticationScreen = (props: IAuthenticationScreenProps) => {
  const {} = props;

  const [focusedFieldIndex, setFocusedFieldIndex] = useState<number>(0);
  const [OTPArray, setOTPArray] = useState<string[]>(['', '', '', '']);

  const navigation = useNavigation() as any;
  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const inputRefArray: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const onVerifyPress = () => {
    //TODO: Implement onVerifyPress functionality
  };

  const onResendCodePress = () => {
    //TODO: Implement onResendCodePress functionality
  };

  const onFocus = (index: number) => {
    setFocusedFieldIndex(index);
  };

  const onBlur = () => {
    setFocusedFieldIndex(-1);
  };

  const handleOTP = (text: string, index: number) => {
    const localOTPArray = [...OTPArray];
    localOTPArray[index] = text;
    setOTPArray(localOTPArray);

    if (text !== '') {
      inputRefArray[index + 1]?.current?.focus();
      setFocusedFieldIndex(index + 1);
    }
  };

  const handleOnKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && index > 0 && OTPArray[index] === '') {
      inputRefArray[index - 1]?.current?.focus();
      setFocusedFieldIndex(index - 1);
    }
  };

  return (
    <KeyboardAvoidingView style={commonStyles.keyboardAvoidingView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainContainer}>
          <View style={commonStyles.lottieContainer}>
            <Image
              source={require('../../assets/Images/EnterOTP.png')}
              style={commonStyles.lottieImage}
            />
          </View>
          <View style={styles.verifyOTPContainer}>
            <ContainerHeading
              title={'Enter OTP'}
              titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
            />
            <ContainerHeading
              subtitle={`An 4 digit code has been sent to ${'gmail@gmail.com'}`}
              subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR}
              subtitleColor={DEFAULT_COLOR.GRAY_DARK}
            />
            <View style={styles.OTPInputBoxContainer}>
              {OTPArray.map((item: string, index: number) => {
                return (
                  <TextInput
                    style={[
                      styles.OTPInputBox,
                      {
                        borderColor:
                          focusedFieldIndex === index
                            ? DEFAULT_COLOR.RED_LIGHT
                            : DEFAULT_COLOR.GRAY_LIGHT,
                      },
                    ]}
                    keyboardType={'numeric'}
                    value={item}
                    autoFocus={index === 0}
                    maxLength={1}
                    onChangeText={text => {
                      handleOTP(text, index);
                    }}
                    onFocus={() => onFocus(index)}
                    onKeyPress={({nativeEvent}) => {
                      const {key} = nativeEvent;
                      handleOnKeyPress(key, index);
                    }}
                    ref={inputRefArray[index]}
                    onBlur={onBlur}
                  />
                );
              })}
            </View>
            <DefaultButton
              variant={'primary'}
              text={'Verify'}
              extraStyles={{
                width: '100%',
                marginTop: 40,
              }}
              colors={{
                textColor: DEFAULT_COLOR.WHITE,
                borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
                backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
              }}
              onPress={onVerifyPress}
            />
            <View style={styles.authContainer}>
              <Text
                style={[
                  styles.label,
                  {
                    color: DEFAULT_COLOR.GRAY_DARK,
                    fontWeight: 'normal',
                  },
                ]}>
                {`Didn't get OTP Code? `}
              </Text>
              <TouchableRipple borderless={true} onPress={onResendCodePress}>
                <Text style={styles.label}>{'Resend Code'}</Text>
              </TouchableRipple>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AuthenticationScreen;
