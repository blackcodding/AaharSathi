import {ISignUpScreenProps} from './SignUpScreen.types';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
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

  const navigation = useNavigation();

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  const onSignInPress = () => {
    navigation.navigate(SignInScreen as never);
  };

  const onContinuePress = () => {
    navigation.navigate(SignInScreen as never);
  };

  return (
    <KeyboardAvoidingView
      style={commonStyles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={32}>
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
                style={commonStyles.inputBox}
                placeholder={'User Name'}
              />
            </View>
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <UserIcon />
              </View>
              <TextInput
                style={commonStyles.inputBox}
                placeholder={'Full Name'}
              />
            </View>
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <MailIcon />
              </View>
              <TextInput
                style={commonStyles.inputBox}
                placeholder={'Email'}
                keyboardType={'email-address'}
              />
            </View>
            <View style={commonStyles.inputBoxContainer}>
              <View style={commonStyles.inputIcon}>
                <LockIcon />
              </View>
              <TextInput
                style={commonStyles.inputBox}
                placeholder={'Password'}
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
