import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {CreateListIcon} from '../../assets/icons/TabBarIcons/CreateListIcon';
import CreateListScreen from '../CreateListScreen/CreateListScreen';
import {DEFAULT_COLOR} from '../../Theme/Theme';
import {DashboardIcon} from '../../assets/icons/TabBarIcons/DashboardIcon';
import {ExpiringSoonIcon} from '../../assets/icons/TabBarIcons/ExpiringSoonIcon';
import ExpiringSoonScreen from '../ExpiringSoonScreen/ExpiringSoonScreen';
import {HomeScreen} from '../HomeScreen/HomeScreen';
import {IDashboardScreenProps} from './DashboardScreen.types';
import {MyListIcon} from '../../assets/icons/TabBarIcons/MyListIcon';
import MyListScreen from '../MyListScreen/MyListScreen';
import {RecipeIcon} from '../../assets/icons/TabBarIcons/Recipe';
import RecipeScreen from '../RecipeScreen/RecipeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {generateStyles} from './DashboardScreen.styles';
import {getUserDetailsUrl} from '../../API/API';
import {getUserId} from '../../utils/storage';
import {useKeyboardVisible} from '../../hooks/useKeyboardVisible';

const DashboardScreen = (props: IDashboardScreenProps) => {
  const {} = props;

  const styles = generateStyles({});

  const Tab = createBottomTabNavigator();
  const isKeyboardVisible = useKeyboardVisible();

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const url = getUserDetailsUrl();
        const userId = await getUserId();
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userId}),
        });

        const data = await response.json();

        if (data.statusCode === 200) {
        }
      } catch (error) {}
    };

    getUserDetails();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 52,
          },
          tabBarItemStyle: {
            paddingTop: 2,
          },
          tabBarActiveBackgroundColor: DEFAULT_COLOR.OFF_WHITE,
          unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name={'HomeScreen'}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? DEFAULT_COLOR.BLUE_DARK
                      : DEFAULT_COLOR.GRAY_MEDIUM,
                  },
                ]}>
                {'Home'}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <DashboardIcon
                width={focused ? 24 : 20}
                height={focused ? 24 : 20}
                fillColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.WHITE
                }
                strokeColor={
                  focused ? DEFAULT_COLOR.WHITE : DEFAULT_COLOR.GRAY_MEDIUM
                }
              />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name={'MyListScreen'}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? DEFAULT_COLOR.BLUE_DARK
                      : DEFAULT_COLOR.GRAY_MEDIUM,
                  },
                ]}>
                {'My List'}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <MyListIcon
                width={focused ? 24 : 20}
                height={focused ? 24 : 20}
                strokeColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_MEDIUM
                }
              />
            ),
          }}
          component={MyListScreen}
        />
        <Tab.Screen
          name={'CreateListScreen'}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <View style={styles.plusIconContainer}>
                <CreateListIcon
                  width={isKeyboardVisible ? 0 : 60}
                  height={isKeyboardVisible ? 0 : 60}
                  fillColor={
                    focused
                      ? DEFAULT_COLOR.BLUE_DARK
                      : DEFAULT_COLOR.GRAY_MEDIUM
                  }
                  strokeWidth={1.25}
                  strokeColor={DEFAULT_COLOR.WHITE}
                />
              </View>
            ),
          }}
          component={CreateListScreen}
        />
        <Tab.Screen
          name={'ExpiringSoonScreen'}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? DEFAULT_COLOR.BLUE_DARK
                      : DEFAULT_COLOR.GRAY_MEDIUM,
                  },
                ]}>
                {'Exp. Soon'}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <ExpiringSoonIcon
                width={focused ? 24 : 20}
                height={focused ? 24 : 20}
                strokeColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_MEDIUM
                }
              />
            ),
          }}
          component={ExpiringSoonScreen}
        />
        <Tab.Screen
          name={'RecipeScreen'}
          options={{
            tabBarLabel: ({focused}) => (
              <Text
                style={[
                  styles.label,
                  {
                    color: focused
                      ? DEFAULT_COLOR.BLUE_DARK
                      : DEFAULT_COLOR.GRAY_MEDIUM,
                  },
                ]}>
                {'Recipe'}
              </Text>
            ),
            tabBarIcon: ({focused}) => (
              <RecipeIcon
                width={focused ? 24 : 20}
                height={focused ? 24 : 20}
                strokeColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_MEDIUM
                }
              />
            ),
          }}
          component={RecipeScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

export default DashboardScreen;
