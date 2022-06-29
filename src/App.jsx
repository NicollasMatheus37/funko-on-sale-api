import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import RoutesApp from './routes'

function App() {
  return (
    <RoutesApp />
  )
}
export default App
