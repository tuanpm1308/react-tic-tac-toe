import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import Game from './game/Game';
import configureStore from './redux/configureStore';

class App extends Component {
  render() {
    const store = configureStore();

    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
