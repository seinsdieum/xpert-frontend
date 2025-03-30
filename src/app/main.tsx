import { createRoot } from 'react-dom/client'

import './styles.css'
import './variables.css'
import './main.css'
import './loading.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)
