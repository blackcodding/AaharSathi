import {DEFAULT_COLOR, DEFAULT_FONT_SIZE} from '../../Theme/Theme';

import {ContainerHeading} from '../../components/ContainerHeading/ContainerHeading';
import {DefaultButton} from '../../components/Buttons/DefaultButton/DefaultButton';
import Header from '../../components/Header/Header';
import {ICreateListScreenProps} from './CreateListScreen.types';
import React from 'react';
import {View} from 'react-native';
import {createListUrl} from '../../API/API';
import {generateStyles} from './CreateListScreen.styles';

const CreateListScreen = (props: ICreateListScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  const onCreateList = async () => {
    try {
      const url = createListUrl();
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: '67b9e4dff20c43a8be22bb0f',
          name: 'Testing 2',
          coverImage: 'https://picsum.photos/200',
        }),
      });

      const data = await response.json();

      if (data.statusCode === 200) {
      } else {
        //TODO: Something went wrong popup
      }
    } catch (error) {
      //TODO: Log error to error controller
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <ContainerHeading
        title={'Create List'}
        titleColor={DEFAULT_COLOR.BLACK}
        titleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
        subTitleSize={DEFAULT_FONT_SIZE.FONT_SIZE_LARGE}
      />
      <DefaultButton
        text={'Create List'}
        colors={{
          textColor: DEFAULT_COLOR.WHITE,
          borderColor: DEFAULT_COLOR.BLUE_MEDIUM,
          backgroundColor: DEFAULT_COLOR.BLUE_MEDIUM,
        }}
        onPress={onCreateList}
      />
    </View>
  );
};

export default CreateListScreen;
