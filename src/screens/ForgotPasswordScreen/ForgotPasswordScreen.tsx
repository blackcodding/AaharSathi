import {IForgotPasswordScreenProps} from './ForgotPasswordScreen.types';
import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {generateStyles} from './ForgotPasswordScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {MailIcon} from '../../assets/icons/MailIcon';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from '../SignInScreen/SignInScreen';

const ForgotPasswordScreen = (props: IForgotPasswordScreenProps) => {
  const {} = props;

  const [focusedField, setFocusedField] = useState<string>('');

  const navigation = useNavigation();

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSubmitPress = () => {
    // TODO: Implement forgot password functionality
  };

  const onSignInPress = () => {
    navigation.navigate(SignInScreen as never);
  };

  const onFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const onBlur = () => {
    setFocusedField('');
  };

  return (
    <KeyboardAvoidingView style={commonStyles.keyboardAvoidingView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainContainer}>
          <View style={commonStyles.lottieContainer}>
            <Image
              source={require('../../assets/Images/ForgotPassword.png')}
              style={commonStyles.lottieImage}
            />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <ContainerHeading
              title={'Forgot Password?'}
              titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
            />
            <ContainerHeading
              subtitle={`Don't worry! It happens. Please enter the address associated with your account.`}
              subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_REGULAR}
              subtitleColor={DEFAULT_COLOR.GRAY_DARK}
            />
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <MailIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'Email'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'Email'}
                keyboardType={'email-address'}
                autoCapitalize={'none'}
                onFocus={() => onFocus('Email')}
                onBlur={onBlur}
              />
            </View>
            <DefaultButton
              variant={'primary'}
              text={'Submit'}
              extraStyles={{
                width: '100%',
                marginTop: 40,
              }}
              colors={{
                textColor: DEFAULT_COLOR.WHITE,
                borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
                backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
              }}
              onPress={onSubmitPress}
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
                {'Remembered your Password? '}
              </Text>
              <TouchableRipple borderless={true} onPress={onSignInPress}>
                <Text style={styles.label}>{'Login'}</Text>
              </TouchableRipple>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
