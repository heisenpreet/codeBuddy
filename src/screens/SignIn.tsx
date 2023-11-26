import { Alert, Button, Text, View } from "react-native"

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface SignInProps {
  navigation: NativeStackNavigationProp<any>;
}
const SignIn:React.FC<SignInProps>=({navigation})=>{
    return  <View style={{flex:1,alignItems:"center",justifyContent:"center" }}>
    <Text>Sign in</Text>
    <Button onPress={()=>navigation.navigate("WELCOME")} color="#841584" title="Sign In"/> 
  
  </View>
}
export {SignIn}