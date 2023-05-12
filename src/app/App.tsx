import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../font.css'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import Screen from './components/Screen/Screen.component';
// import './font.css';

function App() {
  const counter = useSelector((state:RootState)=>{
    return state.appReducer.counter
  })
  const dispatch = useDispatch();
  return (
    <>
     <Screen/>
    </>
  )
}

export default App
