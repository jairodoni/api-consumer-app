import React from 'react'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Users } from '../screens/Users';
import { Platform, StatusBar } from 'react-native';
import { Countries } from '../screens/Countries';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.text,
          tabBarLabelPosition: 'beside-icon',
          tabBarStyle: {
            height: 78,
            paddingTop: Platform.OS === 'ios' ? 20 : 10,
            paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          }
        }}
      >


        <Screen
          name="Users"
          component={Users}
          options={{
            tabBarIcon: (({ size, color }) =>
              <Feather name="user" size={size} color={color} />
            )
          }}
        />

        <Screen
          name="Countries"
          component={Countries}
          options={{
            tabBarIcon: (({ size, color }) =>
              <Feather name="map" size={size} color={color} />
            )
          }}
        />
      </Navigator>
    </>
  );
}