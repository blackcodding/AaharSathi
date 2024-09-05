import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import Chip from '../../components/Chip/Chip';
import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import Header from '../../components/Header/Header';
import {IRecipeScreenProps} from './RecipeScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './RecipeScreen.styles';

const RecipeScreen = (props: IRecipeScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ContainerHeading
        title={'Recipe'}
        titleColor={DEFAULT_COLOR.BLACK}
        titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
      />
      <Chip />
    </View>
  );
};

export default RecipeScreen;
