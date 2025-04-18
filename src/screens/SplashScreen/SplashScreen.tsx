import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {DASHBOARD_SCREEN, SIGN_IN_SCREEN} from '../../utils/screens';
import React, {useEffect} from 'react';
import {decodeToken, isTokenValid} from '../../utils/jwt';

import {DEFAULT_COLOR} from '../../Theme/Theme';
import {ISplashScreenProps} from './SplashScreen.types';
import {commonStyles} from '../../components/commonStyles';
import {generateStyles} from './SplashScreen.styles';
import {getTokens} from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = (props: ISplashScreenProps) => {
  const {} = props;

  const navigation = useNavigation() as any;

  const {height, width} = useWindowDimensions();

  const styles = generateStyles({height, width});

  useEffect(() => {
    const handleUserLoginFlow = async () => {
      const {accessToken}: any = await getTokens();
      const decodedToken: any = decodeToken(accessToken?.toString());
      setTimeout(() => {
        isTokenValid(decodedToken)
          ? navigation.replace(DASHBOARD_SCREEN as never)
          : navigation.replace(SIGN_IN_SCREEN as never);
      }, 300);
    };

    handleUserLoginFlow();
  }, []);

  return (
    <KeyboardAvoidingView style={commonStyles.keyboardAvoidingView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        <View style={styles.mainContainer}>
          <View style={commonStyles.logContainer}>
            <Image
              source={require('../../assets/Images/GrocListicLogo.png')}
              style={commonStyles.logo}
            />
          </View>
          <Text style={commonStyles.logoTextContainer}>
            <Text style={commonStyles.logoFirstHalf}>{'Groc'}</Text>
            <Text style={commonStyles.logoSecondHalf}>{'Listic'}</Text>
          </Text>
          <ActivityIndicator size={28} color={DEFAULT_COLOR.BLUE_MEDIUM} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SplashScreen;
