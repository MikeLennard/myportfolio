import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import Hello from './components/Hello.jsx'
// import Welcome from './components/Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Hello name="John Doe" department="DIT" /> */}
    {/* <Welcome /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
