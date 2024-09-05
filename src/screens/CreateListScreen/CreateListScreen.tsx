import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import Header from '../../components/Header/Header';
import {ICreateListScreenProps} from './CreateListScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './CreateListScreen.styles';

const CreateListScreen = (props: ICreateListScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <Header />
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
