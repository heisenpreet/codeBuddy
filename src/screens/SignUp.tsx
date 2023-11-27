import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BlobSVG} from '../components/BlobSVG';
import {FormInput} from '../components/TextInput';
import {useCallback, useEffect, useState} from 'react';
import {emailValidationCheck} from '../helperFx/emailRegex';
import {validatePassword} from '../helperFx/passwordRegex';
import {phoneValidationCheck} from '../helperFx/phoneRegex';
import {DropDownInput} from '../components/DropDown';
import {Checkbox} from '../components/CheckBox';
import {UserDetailsModal} from '../components/UserDetailsModal';
import {useDispatch} from 'react-redux';
import {addUser} from '../../store/usersSlice';
const screenWidth = Dimensions.get('window').width;
const screenHight = Dimensions.get('window').height;
export interface dropDownDataValues {
  label: string;
  value: string;
}
interface SignUpProps {
  navigation: NativeStackNavigationProp<any>;
}

const COUNTRY_CODE: dropDownDataValues[] = [
  {label: 'India (+91)', value: '+91'},
  {label: 'America (+1)', value: '+1'},
];
const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [terms, setTerms] = useState<boolean>(false);
  const [formStep, setFormStep] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const isStepOneButtonEnable =
    emailValidationCheck(email) && validatePassword(password);
  const isStepTwoButtonEnable =
    firstName?.length > 1 && firstName?.length < 51 && address?.length > 9;
  const isStepThreeButtonEnable =
    phoneValidationCheck(phoneNumber) && countryCode && terms;
  const stepOneHandler = useCallback(() => {
    if (emailValidationCheck(email) && validatePassword(password)) {
      setFormStep(1);
      return;
    }
    if (!emailValidationCheck(email)) {
      Alert.alert('Enter a Valid Email');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert(
        'Password m@ust contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.',
      );
    }
  }, [email, password]);
  const stepTwoHandler = useCallback(() => {
    if (
      firstName?.length > 1 &&
      firstName?.length < 51 &&
      address?.length > 9
    ) {
      setFormStep(2);
      return;
    }
    if (!(firstName?.length > 1 && firstName?.length < 51)) {
      Alert.alert('First Name should be Minimum of 2 character and maximum 50');
      return;
    }
    if (!(address?.length > 9)) {
      Alert.alert('Address should be of minimum 10 characters');
    }
  }, [firstName, address]);
  const stepThreeHandler = useCallback(() => {
    if (phoneValidationCheck(phoneNumber) && countryCode && terms) {
      dispatch(
        addUser({
          firstName,
          lastName: lastName,
          emailId: email,
          password,
          address,
          countryCode: countryCode ? countryCode : '',
          phoneNumber,
        }),
      );
      setShowModal(true);
    }
    if (!phoneValidationCheck(phoneNumber)) {
      Alert.alert('Enter a valid Phone Number');
      return;
    }
    if (!countryCode) {
      Alert.alert('Select a country code');
      return;
    }
    if (!terms) {
      Alert.alert('Accept the terms and policy');
    }
  }, [phoneNumber, countryCode, terms]);
  return (
    <View style={styles.root}>
      <Text style={styles.heading}>
        <Text style={styles.FirstLetter}>S</Text>ign Up{' '}
        <View style={styles.dot}>
          <Text />
        </View>
      </Text>
      <View style={styles.blob}>
        <BlobSVG size="280" color="#fca4a3" />
      </View>
      <View style={styles.welcome}>
        {formStep === 0 ? (
          <>
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

            <Pressable
              onPress={stepOneHandler}
              style={[
                isStepOneButtonEnable ? styles.button : styles.disabledButton,
              ]}>
              <Text style={[styles.buttonText, styles.TextWhite]}>
                save & Next
              </Text>
            </Pressable>
          </>
        ) : null}
        {formStep === 1 ? (
          <>
            <FormInput
              label="First Name"
              placeholder="First Name"
              inputValue={firstName}
              onlyAlpabets={true}
              setInputValue={setFirstName}
            />
            <FormInput
              label="Last Name"
              placeholder="Last Name"
              inputValue={lastName}
              onlyAlpabets={true}
              setInputValue={setLastName}
            />
            <FormInput
              label="Address"
              placeholder="Address"
              inputValue={address}
              setInputValue={setAddress}
            />

            <Pressable
              onPress={stepTwoHandler}
              style={[
                isStepTwoButtonEnable ? styles.button : styles.disabledButton,
              ]}>
              <Text style={[styles.buttonText, styles.TextWhite]}>
                Save & Next
              </Text>
            </Pressable>
            <Pressable onPress={() => setFormStep(0)}>
              <Text>Go Back</Text>
            </Pressable>
          </>
        ) : null}
        {formStep === 2 ? (
          <>
            <DropDownInput
              dropDownData={COUNTRY_CODE}
              value={countryCode}
              setValue={setCountryCode}
              placeHolder="Country Code"
            />
            <FormInput
              label="Phone Number"
              placeholder="Phone Number"
              inputValue={phoneNumber}
              setInputValue={setPhoneNumber}
            />
            <Checkbox
              isChecked={terms}
              setIsChecked={setTerms}
              placeHolder="I agree to the Terms and Privacy Policy."
            />
            <Pressable
              onPress={stepThreeHandler}
              style={[
                isStepThreeButtonEnable ? styles.button : styles.disabledButton,
              ]}>
              <Text style={[styles.buttonText, styles.TextWhite]}>Save</Text>
            </Pressable>
            <Pressable onPress={() => setFormStep(1)}>
              <Text>Go Back</Text>
            </Pressable>
          </>
        ) : null}
           <Pressable style={{marginTop:20}} onPress={() => navigation.navigate("WELCOME")}>
              <Text>Home</Text>
            </Pressable>
      </View>
      {showModal ? (
        <UserDetailsModal userIndex={-1} setShowModal={setShowModal} />
      ) : null}
    </View>
  );
};
export {SignUp};

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
    zIndex: 1,
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
