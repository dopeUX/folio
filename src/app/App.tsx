import React, { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../font.css'
import './App.css';
import './styles/globalStyles.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import Screen from './components/Screen/Screen.component';
import AppScreen from './components/AppScreen/AppScreen.component';

function App() {
  const AppScreens = React.lazy(()=>import('./components/AppScreen/AppScreen.component'))
  const counter = useSelector((state:RootState)=>{
    return state.appReducer.showNavScreen
  })
  const dispatch = useDispatch();
  return (
    <>
     <Suspense fallback={<div>Loading</div>}>
      <AppScreens/>
     </Suspense>
    </>
  )
}

export default App
