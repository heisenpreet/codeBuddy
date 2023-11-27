import React, {SetStateAction, useState} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import {hasOnlyAlphabets} from '../helperFx/AlpabetRegex';
interface FormInputInterface {
  label: string;
  placeholder: string;
  inputValue: string;
  setInputValue: React.Dispatch<SetStateAction<string>>;
  onlyAlpabets?: boolean;
  secureTextEntry?:boolean
}
const FormInput: React.FC<FormInputInterface > = ({
  label,
  placeholder,
  inputValue,
  setInputValue,
  onlyAlpabets = false,
  ...props
}) => {
  return (
    <View style={styles.form}>
      <View style={styles.formControl}>
        <TextInput
          style={styles.formInput}
          value={inputValue}
          placeholder={placeholder}
          onChangeText={text => {
            if (onlyAlpabets) {
              if (hasOnlyAlphabets(text)) {
                setInputValue(text);
              }
              return;
            }
            setInputValue(text);
          }}
          {...props}
        />
        {inputValue ? (
          <Animated.Text entering={FadeInDown} style={styles.formLabel}>
            {label}
          </Animated.Text>
        ) : null}
      </View>
    </View>
  );
};

export {FormInput};

const styles = StyleSheet.create({
  form: {
    width: '80%',
    fontFamily: 'Montserrat-Regular',
    marginVertical: 15,
  },
  formControl: {
    position: 'relative',
    height: 50,

    borderBottomWidth: 1,
    borderBottomColor: '#aaaaaa',
  },
  formLabel: {
    position: 'absolute',
    fontFamily: 'Montserrat-Regular',
    top: -12,
    width: '100%',
    color: '#aaaaaa',
    fontSize: 14,

    paddingHorizontal: 5,
  },
  formInput: {
    fontSize: 14,
    zIndex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 5,
    color: '#222',
    fontFamily: 'Montserrat-Regular',
  },
});
