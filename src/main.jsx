import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { StateProvider } from './context/stateProvider'
import './index.css'
import reducer, { initialState } from './context/reducer'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  </React.StrictMode>
)