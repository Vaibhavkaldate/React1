import { configureStore } from '@reduxjs/toolkit';


const initialState = {
  name: '',
  email: '',
  address: '',
  gender: '',
  languages: [],
  subject1: '',
  subject2: ''
};


const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETNAME':
      return { ...state, name: action.name };
    case 'SETEMAIL':
      return { ...state, email: action.email };
    case 'SETADDRESS':
      return { ...state, address: action.address };
    case 'SETGENDER':
      return { ...state, gender: action.gender };
    case 'SETLANGUAGES':
      return { ...state, languages: action.languages };
    case 'SETSUBJECT1':
      return { ...state, subject1: action.subject1 };
    case 'SETSUBJECT2':
      return { ...state, subject2: action.subject2 };
    default:
      return state;
  }
};


const store = configureStore({
  reducer: myReducer
});

export default store;
