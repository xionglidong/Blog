import React from 'react';

import { Provider } from "react-redux";
import store from "./store";

import LDMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <LDMain/>
    </Provider>
  );
}

export default App;
