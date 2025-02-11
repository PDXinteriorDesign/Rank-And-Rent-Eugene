
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

window.React = React; // Ensure React is available globally

const mount = () => {
  console.log('Mounting application...');
  const container = document.getElementById('root');
  
  if (!container) {
    console.error('Failed to find the root element');
    throw new Error('Failed to find the root element');
  }

  const root = createRoot(container);

  try {
    console.log('Rendering application...');
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    console.log('Application rendered successfully');
  } catch (error) {
    console.error('Error rendering application:', error);
    throw error;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
