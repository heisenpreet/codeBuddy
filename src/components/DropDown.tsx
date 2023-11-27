import React, {SetStateAction, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {dropDownDataValues} from '../screens/SignUp';

interface DropDownInputInterface {
  dropDownData: dropDownDataValues[];
  value: string | null;
  setValue: React.Dispatch<SetStateAction<string | null>>;
  placeHolder: string;
}

const DropDownInput: React.FC<DropDownInputInterface> = ({
  dropDownData,
  setValue,
  value,
  placeHolder,
}) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      data={dropDownData}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={placeHolder}
      value={value}
      onChange={item => {
        setValue(item?.value);
      }}
    />
  );
};

export {DropDownInput};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: '#aaaaaa',
    borderBottomWidth: 1,
    width: '80%',
    fontFamily: 'Montserrat-Regular',
  },

  placeholderStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  selectedTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },

  inputSearchStyle: {
    height: 20,
    fontSize: 14,
  },
});
