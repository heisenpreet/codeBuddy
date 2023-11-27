import React, {SetStateAction} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
interface CheckBoxInnnterface {
  isChecked: boolean;
  setIsChecked: React.Dispatch<SetStateAction<boolean>>;
  placeHolder:string
}
const Checkbox: React.FC<CheckBoxInnnterface> = ({isChecked, setIsChecked,placeHolder}) => {
  return (
    <BouncyCheckbox
      size={25}
      isChecked={isChecked}
      fillColor="#fc8f8d"
      unfillColor="#e4e4e7"
      text={placeHolder}
      iconStyle={{borderColor: '#aaaaaa'}}
      style={{marginTop: 10, width: '80%'}}
      innerIconStyle={{borderWidth: 1, borderRadius: 10}}
      textStyle={{
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        textDecorationLine: 'none',
      }}
      onPress={(isChecked: boolean) => {
        setIsChecked(isChecked);
      }}
    />
  );
};
export {Checkbox};
