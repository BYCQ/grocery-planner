import { createStore } from 'redux'

const initialState = {
  dishList: [0],
  language: 'EN'
}

export function reducer(state = initialState, action) {
  let newDishList = [];
  switch (action.type) {
    case 'AddNewCard':
      newDishList = state.dishList.slice();
      newDishList.push(state.dishList.length);
      return Object.assign({}, state, {
        dishList: newDishList
      });
    case 'ChangeLanguage':
      // Placeholder, nothing happens here.
      return state;
    default:
      return state;
  }
}

export const languageSelector = state => state.language;
export const dishListSelector = state => state.dishList;

export const store = createStore(reducer);





