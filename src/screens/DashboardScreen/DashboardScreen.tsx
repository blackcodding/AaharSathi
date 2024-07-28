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
import React from 'react';
import {RecipeIcon} from '../../assets/icons/TabBarIcons/Recipe';
import RecipeScreen from '../RecipeScreen/RecipeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {generateStyles} from './DashboardScreen.styles';

const DashboardScreen = (props: IDashboardScreenProps) => {
  const {} = props;

  const styles = generateStyles({});
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 48,
          },
          tabBarItemStyle: {
            paddingTop: 2,
          },
          tabBarActiveBackgroundColor: DEFAULT_COLOR.OFF_WHITE,
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
                  width={60}
                  height={60}
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
