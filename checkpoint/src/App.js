import React from 'react';
import {createStore,applyMiddleware} from 'redux'
import{Provider} from 'react-redux'
import thunk from 'redux-thunk';

import NavBar from './componenets/navbar/NavBar';
import reducer from './reducer'

import UserList from './componenets/UserList/index';
import './App.css';

const store =createStore(reducer,applyMiddleware(thunk))



function App() {
  return (
    
    <div className="App">
      <Provider store={store}>
      <NavBar />
      <UserList />
      </Provider>
    </div>
    
  );
}

export default App;
