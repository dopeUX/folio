import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../font.css'
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { updateCounter } from './store/AppSlice';
// import './font.css';

function App() {
  const counter = useSelector((state:RootState)=>{
    return state.appReducer.counter
  })
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={()=>{
         dispatch(updateCounter())
      }}>Press me!</button>
    </div>
  )
}

export default App
