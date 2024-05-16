
import {IRecipeScreenProps} from './RecipeScreen.types';
import React from 'react';
import {View} from 'react-native';
import {generateStyles} from './RecipeScreen.styles';

const RecipeScreen = (props: IRecipeScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  return (
    <View style={styles.mainContainer}>
    {}
    </View>
  );
};

export default RecipeScreen;
