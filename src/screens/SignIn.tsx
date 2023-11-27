import {
  Alert,
  Button,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useCallback, useState} from 'react';
import {UserDetailsModal} from '../components/UserDetailsModal';
import {FormInput} from '../components/TextInput';
import {BlobSVG} from '../components/BlobSVG';
import {useSelector} from 'react-redux';
import {UserObject} from '../../store/usersSlice';

const screenWidth = Dimensions.get('window').width;
const screenHight = Dimensions.get('window').height;
interface SignInProps {
  navigation: NativeStackNavigationProp<any>;
}
const SignIn: React.FC<SignInProps> = ({navigation}) => {
  const users = useSelector((state: UserObject) => state.user);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userIndex, setUserIndex] = useState<number | null>(null);
  const findUser = useCallback(() => {
    const findUser = users.findIndex(
      user => user.emailId === email && user.password === password,
    );
    if (findUser === -1) {
      Alert.alert('user not found');
      return;
    }
    setUserIndex(userIndex);
    setShowModal(true);
  }, [users, email, password]);
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>
        <Text style={styles.FirstLetter}>S</Text>ign In{' '}
        <View style={styles.dot}>
          <Text />
        </View>
      </Text>
      <View style={styles.blob}>
        <BlobSVG size="280" color="#fca4a3" />
      </View>
      <View style={styles.welcome}>
        <FormInput
          label="Email"
          placeholder="Email"
          inputValue={email}
          setInputValue={setEmail}
        />
        <FormInput
          label="Password"
          placeholder="Password"
          inputValue={password}
          setInputValue={setPassword}
          secureTextEntry={true}
        />

        <Pressable onPress={findUser} style={styles.button}>
          <Text style={[styles.buttonText, styles.TextWhite]}>Sign In</Text>
        </Pressable>
      </View>
      {showModal ? (
        <UserDetailsModal userIndex={-1} setShowModal={setShowModal} />
      ) : null}
    </View>
  );
};
export {SignIn};

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
    marginLeft: 'auto',
    paddingRight: 50,
    paddingTop: 50,
    zIndex: 2,
    letterSpacing: 2,
  },
  FirstLetter: {
    fontSize: 28,
  },
  dot: {
    zIndex: 1,
    backgroundColor: '#fc8f8d',
    width: 6,
    height: 6,
    borderRadius: 100,
  },
  blob: {
    position: 'absolute',
    top: -100,
    right: -100,
    zIndex: 0,
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'auto',
    width: '100%',
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
  disabledButton: {
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: '#9ca3af',
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
