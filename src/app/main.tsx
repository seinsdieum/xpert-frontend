import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './variables.css';
import './main.css';
import './styles.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
