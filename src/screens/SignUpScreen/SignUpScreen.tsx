import {ISignUpScreenProps} from './SignUpScreen.types';
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {generateStyles} from './SignUpScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from '../SignInScreen/SignInScreen';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import {UserIcon} from '../../assets/icons/UserIcon';
import {AtIcon} from '../../assets/icons/AtIcon';
import {MailIcon} from '../../assets/icons/MailIcon';
import {LockIcon} from '../../assets/icons/LockIcon';

const SignUpScreen = (props: ISignUpScreenProps) => {
  const {} = props;

  const [focusedField, setFocusedField] = useState<string>('');

  const navigation = useNavigation();

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSignInPress = () => {
    navigation.navigate(SignInScreen as never);
  };

  const onContinuePress = () => {
    navigation.navigate(SignInScreen as never);
  };

  const onFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const onBlur = () => {
    setFocusedField('');
  };

  return (
    <KeyboardAvoidingView
      style={commonStyles.keyboardAvoidingView}
      behavior={'position'}
      keyboardVerticalOffset={height * 0.07}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainContainer}>
          <View style={commonStyles.lottieContainer}>
            <LottieView
              source={require('../../assets/Lottie/Sign.json')}
              style={commonStyles.lottie}
              autoPlay
              loop
            />
          </View>
          <View style={styles.signUpContainer}>
            <ContainerHeading
              title={'Sign Up'}
              titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_EXTRA_EXTRA_LARGE}
            />
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <AtIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'User Name'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'User Name'}
                onFocus={() => onFocus('User Name')}
                onBlur={onBlur}
              />
            </View>
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <UserIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'Full Name'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'Full Name'}
                onFocus={() => onFocus('Full Name')}
                onBlur={onBlur}
              />
            </View>
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
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <LockIcon />
              </View>
              <TextInput
                style={[
                  commonStyles.inputBox,
                  {
                    borderBottomColor:
                      focusedField === 'Password'
                        ? DEFAULT_COLOR.RED_LIGHT
                        : DEFAULT_COLOR.GRAY_LIGHT,
                  },
                ]}
                placeholder={'Password'}
                onFocus={() => onFocus('Password')}
                onBlur={onBlur}
              />
            </View>
            <DefaultButton
              variant={'primary'}
              text={'Continue'}
              extraStyles={{
                width: '100%',
                marginTop: 40,
              }}
              colors={{
                textColor: DEFAULT_COLOR.WHITE,
                borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
                backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
              }}
              onPress={onContinuePress}
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
                {'Joined us before? '}
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

export default SignUpScreen;
