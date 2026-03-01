import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for Spline runtime attempting to overwrite global fetch which is read-only in some environments
if (typeof window !== 'undefined') {
  try {
    const originalFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get: () => originalFetch,
      set: () => { /* ignore Spline's attempt to overwrite fetch */ }
    });
  } catch (e) {
    console.warn('Spline fetch polyfill fix failed', e);
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
