import React from 'react';
import { Provider } from 'react-redux';
import store from './store';  // Import your store
import RRoutes from './RRoutes';  // Import the routes
import ErrorBoundary from './components/ErrorBoundary';  // Import your ErrorBoundary component

function App() {
  return (
    <Provider store={store}>  
      {/* Wrap RRoutes with ErrorBoundary */}
      <ErrorBoundary>
        <RRoutes />  
      </ErrorBoundary>
    </Provider>
  );
}

export default App;



