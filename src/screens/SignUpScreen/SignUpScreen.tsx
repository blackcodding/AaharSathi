import {ISignUpScreenProps} from './SignUpScreen.types';
import React from 'react';
import {KeyboardAvoidingView, ScrollView, Text, View} from 'react-native';
import {generateStyles} from './SignUpScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SignInScreen from '../SignInScreen/SignInScreen';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DEFAULT_FONT_SIZE} from '../../Theme/Theme';

const SignUpScreen = (props: ISignUpScreenProps) => {
  const {} = props;

  const navigation = useNavigation();

  const styles = generateStyles({});

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
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
