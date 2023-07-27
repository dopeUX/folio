import React, { useState,useEffect, Suspense } from 'react'
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

  const [count, setCount] = useState<number>(0);
  const [loading , setLoading] = useState<boolean>(true);
  useEffect(()=>{
    if(count==3){
      setLoading(false);
    }
    console.log(count, ' =>COUNT')
  },[count])
  const dispatch = useDispatch();
  return (
    <>
     {/* <Suspense fallback={<div>Loading</div>}> */}
     {
      !loading ? <AppScreen/> : <div>loading...</div>
     }
     {/* </Suspense> */}
     <img src="/assets/work-nav.svg" style={{display:'none'}} onLoad={()=>{
       setCount(x=>x+1)
     }} alt="" />
     <img src="/assets/me-nav.svg" style={{display:'none'}} onLoad={()=>{
       setCount(x=>x+1)
     }} alt="" />
     <img src="/assets/reach-nav.svg" style={{display:'none'}} onLoad={()=>{
      setCount(x=>x+1)
     }}  alt="" />
    </>
  )
}

export default App
