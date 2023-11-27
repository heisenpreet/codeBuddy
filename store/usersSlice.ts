import {createSlice, PayloadAction} from '@reduxjs/toolkit';
export interface UserObject {
  user: userInterface[];
}

interface userInterface {
  emailId: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  countryCode: string;
  phoneNumber: string;
}

const userSlice = createSlice({
  name: 'user',
  initialState: [
    {
      emailId: 'j',
      password: '1',
      firstName: 'John',
      lastName: 'Doe',
      address: '22/B, Baker Street, London - 10089',
      countryCode: '+91',
      phoneNumber: '2225550909',
    },
  ],
  reducers: {
    addUser(state, action: PayloadAction<userInterface>) {
      state.push(action.payload);
    },
  },
});

export const {addUser} = userSlice.actions;
export default userSlice.reducer;
