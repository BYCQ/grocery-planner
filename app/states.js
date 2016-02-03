import { createStore } from 'redux'

const initialState = {
  numberList: [6, 7, 9],
  language: 'EN'
}

export function reducer(state = initialState, action) {
  let newNumberList = [];
  switch (action.type) {
    case 'AddNewNumber':
      newNumberList = state.numberList.slice();
      newNumberList.push(state.numberList.length);
      return Object.assign({}, state, {
        numberList: newNumberList
      });
    case 'ChangeLanguage':
      // Placeholder, nothing happens here.
      return state;
    default:
      return state;
  }
}

export const languageSelector = state => state.language;
export const numberListSelector = state => state.numberList;

export const store = createStore(reducer);





