import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

import * as FCMService from './src/services/FCMService'
import Chat from './src/screens/Chat'

const App = () => {

  React.useEffect(() => {
    FCMService.checkPermission();
    const unsubscribe = FCMService.unsubscribe();
    return unsubscribe;
  }, []);

  return (
    <Provider store={store}>
      <Chat/>
    </Provider>
  )
};

export default App;

