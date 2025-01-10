import React from 'react';
import { Provider } from 'react-redux';
import store from './store';  // Import your store
import RRoutes from './RRoutes';  // Import the routes


function App() {
  return (
    <Provider store={store}>  
      
      
        <RRoutes />  
      
    </Provider>
  );
}

export default App;



