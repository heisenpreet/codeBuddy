import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BlobSVG} from '../components/BlobSVG';
import {WelcomeSVG} from '../components/WelcomeSVG';
import {useSelector} from 'react-redux';
import {UserObject} from '../../store/usersSlice';

const screenWidth = Dimensions.get('window').width;
const screenHight = Dimensions.get('window').height;

interface WelcomeProps {
  navigation: NativeStackNavigationProp<any>;
}

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  const user = useSelector((state: UserObject) => state.user[0].phoneNumber);

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>
        <Text style={styles.FirstLetter}>W</Text>elcome{' '}
        <View style={styles.dot}>
          <Text />
        </View>
      </Text>
      <View style={styles.blob}>
        <BlobSVG size="280" />
      </View>
      <View style={styles.welcome}>
        <WelcomeSVG />
        <Text style={styles.WelcomeHeading}>Welcome to Codebuddy</Text>
        <View style={styles.dot}>
          <Text />
        </View>
        <Text style={styles.WelcomeMessage}>
          This is where your dreams are designed into reality{' '}
        </Text>
        <Pressable
          onPress={() => navigation.navigate('SIGN_UP')}
          style={styles.button}>
          <Text style={[styles.buttonText, styles.TextWhite]}>Sign Up</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('SIGN_IN')}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
};
export {Welcome};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    position: 'relative',
    width: screenWidth,
    height: screenHight,
  },
  heading: {
    fontSize: 24,
    fontFamily: 'RobotoSlab-Regular',
    color: '#333',
    marginBottom: 'auto',
    marginRight: 'auto',
    paddingLeft: 50,
    paddingTop: 50,
    zIndex: 1,
    letterSpacing: 2,
  },
  FirstLetter: {
    fontSize: 28,
  },
  dot: {
    backgroundColor: '#fc8f8d',
    width: 6,
    height: 6,
    borderRadius: 100,
  },
  blob: {
    position: 'absolute',
    top: -100,
    left: -100,
    zIndex: 0,
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
    width: '100%',
  },
  WelcomeHeading: {
    fontFamily: 'RobotoSlab-Regular',
    color: '#444',
    marginTop: 10,
    marginBottom: 20,
    letterSpacing: 1,
  },
  WelcomeMessage: {
    width: '50%',
    marginTop: 20,
    textAlign: 'center',

    fontFamily: 'RobotoSlab-Regular',
    color: '#777',
  },
  button: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: '#fca4a3',
  },
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.25,
    fontFamily: 'Montserrat-Regular',
  },
  TextWhite: {
    color: 'white',
  },
});
