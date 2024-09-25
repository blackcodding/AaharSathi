import {Image, View} from 'react-native';
import React, {useState} from 'react';

import {IHeaderProps} from './Header.types';
import InputBox from '../InputBox/InputBox';
import {Menu} from '../Menu/Menu';
import {Portal} from '@gorhom/portal';
import {Profile} from '../Profile/Profile';
import {commonStyles} from '../commonStyles';
import {generateStyles} from './Header.styles';

const Header = (props: IHeaderProps) => {
  const {} = props;

  const [openMenu, setOpenMenu] = useState(false);

  const handleProfileClick = () => {
    setOpenMenu(true);
  };

  const handleCloseMenuClick = () => {
    setOpenMenu(false);
  };

  const handleEditProfileClick = () => {};

  const styles = generateStyles({});

  return (
    <>
      <View style={styles.profileContainer}>
        <Profile handleProfileClick={handleProfileClick} />
        <InputBox placeholder={'Search'} showSearchIcon={true} />
        <View style={commonStyles.gifContainer}>
          <Image
            source={
              true
                ? require('../../assets/Gif/RingingBell.gif')
                : require('../../assets/Images/Bell.png')
            }
            style={commonStyles.gif}
          />
        </View>
      </View>
      {openMenu && (
        <Portal>
          <Menu
            onCloseMenuPress={handleCloseMenuClick}
            onEditProfilePress={handleEditProfileClick}
          />
        </Portal>
      )}
    </>
  );
};

export default Header;
