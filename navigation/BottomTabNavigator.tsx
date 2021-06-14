/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import index from '../screens/HomeScreen/index';
import MovieDetailScreen from '../screens/MovieDetailsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import TabFourScreen from '../screens/TabFourScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList } from '../types';
import HomeScreen from '../screens/HomeScreen/index';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
           tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color = {color} style = {{ marginBottom: 5 }}/>,
        }}
      />
      <BottomTab.Screen
        name="Coming Soon"
        component={ComingSoonNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="video-library" size={24} color = {color} style = {{ marginBottom: 5 }} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" size={24} color = {color} style = {{ marginBottom: 5 }} />,
        }}
      />
      <BottomTab.Screen
        name="Download"
        component={DownloadNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="download" size={24} color = {color} style = {{ marginBottom: 5 }} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabOneParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailScreen}
        options={{ title: "" }}
      />
    </HomeStack.Navigator>
  );
}

const ComingSoonStack = createStackNavigator<TabTwoParamList>();

function ComingSoonNavigator() {
  return (
    <ComingSoonStack.Navigator>
      <ComingSoonStack.Screen
        name="Coming Soon Screen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
    </ComingSoonStack.Navigator>
  );
}

const SearchStack = createStackNavigator<TabThreeParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search Screen"
        component={TabThreeScreen}
        options={{ headerShown: false }}
      />
    </SearchStack.Navigator>
  );
}

const DownloadStack = createStackNavigator<TabFourParamList>();

function DownloadNavigator() {
  return (
    <DownloadStack.Navigator>
      <DownloadStack.Screen
        name="Download Screen"
        component={TabFourScreen}
        options={{ headerShown: false }}
      />
    </DownloadStack.Navigator>
  );
}
