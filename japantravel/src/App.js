import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
 return (
   <Provider store={store}>
   <BrowserRouter>
    <Routes/>
   </BrowserRouter>
   </Provider>
 );
}
