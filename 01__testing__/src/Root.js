import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';

export default (props)=> {
    const store = createStore(
        reducers,
        props.initialState, 
        applyMiddleware(reduxPromise))
     return (
         <Provider store={store}>
             {/* props.children is a feature of react. It allows to take this componnent we just create and use it to wrapp other components */}
             {props.children}
         </Provider>
     )
}
