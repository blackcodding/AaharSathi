import {ISignInScreenProps} from './SignInScreen.types';
import React from 'react';
import {Text, View} from 'react-native';
import {generateStyles} from './SignInScreen.styles';
import {commonStyles} from '../../components/commonStyles';
import LottieView from 'lottie-react-native';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SignUpScreen from '../SignUpScreen/SignUpScreen';

const SignInScreen = (props: ISignInScreenProps) => {
  const {} = props;

  const navigation = useNavigation();

  const styles = generateStyles({});
  const onSignUpPress = () => {
    navigation.navigate(SignUpScreen as never); 
  };

  return (
    <View style={styles.mainContainer}>
      <View style={commonStyles.lottieImageContainer}>
        <LottieView
          source={require('../../assets/Lottie/Sign.json')}
          style={commonStyles.lottie}
          autoPlay
          loop
        />
        <TouchableRipple onPress={onSignUpPress}>
          <Text>{'Sign Up'}</Text>
        </TouchableRipple>
      </View>
    </View>
  );
};

export default SignInScreen;
