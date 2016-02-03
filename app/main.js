import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createSelector } from 'reselect'

import { reducer, store, numberListSelector } from 'app/states'

class App extends React.Component {
  render() {
    const { dispatch, numbers } = this.props;
    
    return (
      <div>
        <button onClick={() => {
            dispatch({type: 'AddNewNumber'});
          }}>
          Add
        </button>
        <ul>
          {numbers.map((x, index) => {
             return (
               <li key={index}>{x}</li>
             );
           })}
        </ul>
      </div>
    );
  }
}

const selector = createSelector(
  numberListSelector,
  numberList => {
    return {
      numbers: numberList
    }
  }
);

const WrappedApp = connect(selector)(App);

render(
  <Provider store={store}>
    <WrappedApp />
  </Provider>,
  document.getElementById('content')
);


