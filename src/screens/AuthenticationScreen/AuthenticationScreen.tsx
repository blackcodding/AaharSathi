import {IAuthenticationScreenProps} from './AuthenticationScreen.types';
import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {generateStyles} from './AuthenticationScreen.styles';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {commonStyles} from '../../components/commonStyles';
import {useNavigation} from '@react-navigation/native';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {TouchableRipple} from 'react-native-paper';
const AuthenticationScreen = (props: IAuthenticationScreenProps) => {
  const {} = props;

  const [focusedFieldIndex, setFocusedFieldIndex] = useState<number>(0);

  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

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

  return (
    <KeyboardAvoidingView
      style={commonStyles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={height * 0.07}>
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
              {['1', '2', '3', '4'].map((item: string, index: number) => {
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
                    onFocus={() => onFocus(index)}
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
