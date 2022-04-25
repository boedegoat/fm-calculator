import { createStore, StateMachineProvider } from 'little-state-machine'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export const userInDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

createStore(
  {
    theme: {
      type: userInDarkMode ? 1 : 2,
      userTheme: false,
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
    name: 'state',
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
