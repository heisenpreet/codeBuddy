import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface WelcomeProps {
  navigation: NativeStackNavigationProp<any>;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontFamily:"Montserrat-BoldItalic"}}>Home ScreenW</Text>
      <Button title="Press me" onPress={() => navigation.navigate('SIGN_IN')} />
    </View>
  );
};
export {Welcome};
