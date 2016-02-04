import React from 'react'
import { render, findDOMNode } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createSelector } from 'reselect'

import { reducer, store, numberListSelector } from 'app/states'
import { DishCard } from 'app/component'

import 'twbs/bootstrap/js/bootstrap'
import 'twbs/bootstrap/css/bootstrap.css!'

class App extends React.Component {
  render() {
    const { dispatch, numbers } = this.props;

    return (
      <div className='container'>
        <button ref={(c) => { $(findDOMNode(c)).tooltip(); }}
                className="btn btn-primary"
                data-toggle="tooltip"
                dat-aplacement="bottom"
                title="Cleek me."
                onClick={() => {
                    dispatch({type: 'AddNewNumber'});
                  }}>
          Add
        </button>
        <br />
        <br />
        <div className='row'>
          {numbers.map((x, index) => {
            return (
              <div className='col-md-3 col-sm-12' key={index} >
                <DishCard dishTitle={x} />
              </div>
            );
          })}
        </div>
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


