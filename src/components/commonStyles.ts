import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  gifContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    borderRadius: 100,
  },
  gif: {
    width: '90%',
    height: '90%',
    objectFit: 'contain',
  },
});
