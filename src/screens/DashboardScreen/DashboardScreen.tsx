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
import {View} from 'react-native';
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
        }}>
        <Tab.Screen
          name={'HomeScreen'}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({focused}) => (
              <DashboardIcon
                strokeColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_LIGHT
                }
              />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name={'MyListScreen'}
          options={{
            tabBarLabel: 'My List',
            tabBarIcon: ({focused}) => (
              <MyListIcon
                strokeColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_LIGHT
                }
              />
            ),
          }}
          component={MyListScreen}
        />
        <Tab.Screen
          name={'CreateListScreen'}
          options={{
            tabBarLabel: 'Create List',
            tabBarIcon: ({focused}) => (
              <CreateListIcon
                width={32}
                height={32}
                fillColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_LIGHT
                }
                strokeColor={DEFAULT_COLOR.WHITE}
              />
            ),
          }}
          component={CreateListScreen}
        />
        <Tab.Screen
          name={'ExpiringSoonScreen'}
          options={{
            tabBarLabel: 'Expiring Soon ',
            tabBarIcon: ({focused}) => (
              <ExpiringSoonIcon
                strokeColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_LIGHT
                }
              />
            ),
          }}
          component={ExpiringSoonScreen}
        />
        <Tab.Screen
          name={'RecipeScreen'}
          options={{
            tabBarLabel: 'Recipe',
            tabBarIcon: ({focused}) => (
              <RecipeIcon
                strokeColor={
                  focused ? DEFAULT_COLOR.BLUE_DARK : DEFAULT_COLOR.GRAY_LIGHT
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
