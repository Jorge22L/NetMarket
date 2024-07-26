import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateProvider } from './contexto/store.jsx'
import { initialState } from './contexto/initialState.jsx'
import { mainReducer } from './contexto/reducers'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <StateProvider initialState={initialState} reducer={mainReducer}>
      <App />
    </StateProvider>
    
  </React.StrictMode>,
)
