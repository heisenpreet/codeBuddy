import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Welcome} from './src/screens/Welcome';
import {HeaderNavigator} from './src/components/HeaderNavigator';
import {SignIn} from './src/screens/SignIn';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WELCOME">
        <Stack.Screen
          name="WELCOME"
          component={Welcome}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="SIGN_IN"
          component={SignIn}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
