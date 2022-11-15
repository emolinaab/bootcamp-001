import React from 'react';
import { store } from './src/store';
import { Provider } from 'react-redux';
import Navigator from './src/navigation/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
