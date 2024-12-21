import {IAuthenticationScreenProps} from './AuthenticationScreen.types';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {generateStyles} from './AuthenticationScreen.styles';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {TouchableRipple} from 'react-native-paper';
const AuthenticationScreen = (props: IAuthenticationScreenProps) => {
  const {} = props;

  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();

  const onVerifyPress = () => {
    //TODO: Implement onVerifyPress functionality
  };

  const onResendCodePress = () => {
    //TODO: Implement onResendCodePress functionality
  };

  const styles = generateStyles({height, width});

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
