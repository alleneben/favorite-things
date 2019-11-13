import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "../redux";

import Main from "./Main";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      {/* shared components goes here eg. navbar */} 
      <Main />
    </Router>
  </Provider>
);

export default App;
