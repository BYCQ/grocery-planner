import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createSelector } from 'reselect'

import { reducer, store, dishListSelector } from 'app/states'
import { DishCard } from 'app/component'

import 'twbs/bootstrap/js/bootstrap'
import 'twbs/bootstrap/css/bootstrap.css!'

class App extends React.Component {
  render() {
    const { dispatch, dishes } = this.props;

    return (
      <div className='container'>
        <button className="btn btn-primary"
                onClick={() => {
                    dispatch({type: 'AddNewCard'});
                  }}>
          Add
        </button>
        <br />
        <br />
        <div className='row'>
          {dishes.map((x, index) => {
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
  dishListSelector,
  dishList => {
    return {
      dishes: dishList
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


