import {Text, View} from 'react-native';

import {Profile} from '../Profile/Profile';
import React from 'react';
import {generateStyles} from './Menu.styles';

export const Menu = () => {
  const styles = generateStyles();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.menuContainer}>
        <View style={styles.headingContainer}>
          <Profile
            image={
              'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'
            }
            showBorder={true}
          />
          <View style={styles.personalDetailsContainer}>
            <Text style={styles.name}>{'Supriya Barai'}</Text>
          </View>
          <Text style={styles.phoneNumber}>{'0123456789'}</Text>
        </View>
        <View style={styles.bodyContainer}></View>
      </View>
    </View>
  );
};
