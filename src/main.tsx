import { createStore, StateMachineProvider } from 'little-state-machine'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

createStore(
  {
    theme: {
      type: 1,
      pointerPos: 0,
    },
    calculator: {
      firstValue: '0',
      operator: '',
      secondValue: '',
      result: '',
    },
  },
  {
    persist: 'none', // change this later
    storageType: localStorage,
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <StateMachineProvider>
      <App />
    </StateMachineProvider>
  </React.StrictMode>
)
