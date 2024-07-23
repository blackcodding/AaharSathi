import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {ICreateListScreenProps} from './CreateListScreen.types';
import {Profile} from '../../components/Profile/Profile';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './CreateListScreen.styles';

const CreateListScreen = (props: ICreateListScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileContainer}>
        <Profile
          image={
            'https://ik.imagekit.io/s1qqeedcv/AaharSathi/Onboarding%20Screen.png?updatedAt=1707764562848'
          }
        />
      </View>
      <ContainerHeading
        title={'Create List'}
        titleColor={DEFAULT_COLOR.BLACK}
        titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
      />
    </View>
  );
};

export default CreateListScreen;
