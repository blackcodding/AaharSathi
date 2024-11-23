import {Image, View} from 'react-native';
import React, {useState} from 'react';

import {IHeaderProps} from './Header.types';
import InputBox from '../InputBox/InputBox';
import {Menu} from '../Menu/Menu';
import {Portal} from '@gorhom/portal';
import {Profile} from '../Profile/Profile';
import {commonStyles} from '../commonStyles';
import {generateStyles} from './Header.styles';
import {TouchableRipple} from 'react-native-paper';

const Header = (props: IHeaderProps) => {
  const {} = props;

  const [openMenu, setOpenMenu] = useState(false);

  const handleProfilePress = () => {
    setOpenMenu(true);
  };

  const handleCloseMenuPress = () => {
    setOpenMenu(false);
  };

  const handleEditProfilePress = () => {};

  const styles = generateStyles({});

  return (
    <>
      <View style={styles.profileContainer}>
        <Profile handleProfilePress={handleProfilePress} />
        <InputBox
          placeholder={'Search'}
          showSearchIcon={true}
          showCrossIcon={true}
        />
        <TouchableRipple
          onPress={() => {}}
          borderless={true}
          style={commonStyles.gifContainer}>
          <Image
            source={
              true
                ? require('../../assets/Gif/RingingBell.gif')
                : require('../../assets/Images/Bell.png')
            }
            style={commonStyles.gif}
          />
        </TouchableRipple>
      </View>
      {openMenu && (
        <Portal>
          <Menu
            onCloseMenuPress={handleCloseMenuPress}
            onEditProfilePress={handleEditProfilePress}
          />
        </Portal>
      )}
    </>
  );
};

export default Header;
