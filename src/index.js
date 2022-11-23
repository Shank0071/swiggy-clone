import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StateProvider } from './Components/context/StateContext';
import { initialState } from './Components/context/initialState';
import reducer from './Components/context/reducer';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);


