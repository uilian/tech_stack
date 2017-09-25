import React from 'react';
import { View } from 'react-native';
imporrt { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
  return (
    <Provider store={createStore(reducers)} >
      <View>
        <Header>
          Tech Stack
        </Header>
      </View>
    </Provider>
  );
};


export default App;
