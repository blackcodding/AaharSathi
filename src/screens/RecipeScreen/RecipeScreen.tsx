import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {IRecipeScreenProps} from './RecipeScreen.types';
import {Profile} from '../../components/Profile/Profile';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './RecipeScreen.styles';

const RecipeScreen = (props: IRecipeScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
      <ContainerHeading
        title={'Recipe'}
        titleColor={DEFAULT_COLOR.BLACK}
        titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
      />
    </View>
  );
};

export default RecipeScreen;
