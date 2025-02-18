import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import SearchScreen from './src/screens/SearchScreen';
import ShortlistScreen from './src/screens/ShortlistScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopWidth: 1,
              borderTopColor: '#e5e5e5',
              paddingBottom: 8,
              paddingTop: 8,
              height: 60,
            },
            tabBarActiveTintColor: '#333333',
            tabBarInactiveTintColor: '#999999',
            headerStyle: {
              backgroundColor: '#ffffff',
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#e5e5e5',
            },
            headerTitleStyle: {
              color: '#333333',
              fontSize: 18,
              fontWeight: '600',
            },
          }}
        >
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Text style={{ color, fontSize: 24 }}>🔍</Text>
              ),
              title: 'Search Movies',
            }}
          />
          <Tab.Screen
            name="Shortlist"
            component={ShortlistScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Text style={{ color, fontSize: 24 }}>⭐</Text>
              ),
              title: 'Shortlisted Movies',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;