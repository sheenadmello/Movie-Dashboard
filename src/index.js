import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' import for React 18+
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root for React 18+
const root = ReactDOM.createRoot(rootElement);

// Render the App inside QueryClientProvider
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
