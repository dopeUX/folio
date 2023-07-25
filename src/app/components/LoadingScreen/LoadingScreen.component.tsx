import React, { useEffect,useState, useRef, useLayoutEffect } from "react";
import "./LoadingScreen.component.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  updateIsLoading,
  updateIsLoadingScreenTurnedOn,
  updateLoadingMusicState,
} from "../../store/AppSlice";
// import sampleMusic from '../../../assets/samplemusic.mp3';
import ReduxActions from "../../actions/reduxActions";
import ReduxStates from "../../actions/reduxStates";

const LoadingScreen: React.FC<any> = () => {
  const reduxStates = new ReduxStates();
  const isLoading = reduxStates.isLoading;
  const isLoadingScreenTurnedOn = reduxStates.isLoadingScreenTurnedOn;
  const dispatch = useDispatch();
  const loadingScreenRef: any = useRef();
  const bgImageRef: any = useRef();
  const initialRender = useRef(true);
  const quoteRef: any = useRef();
  const wrapperImageRef:any = useRef();
  const [isPlaying, setIsPlaying] = useState('');
  const audioRef:any = useRef(null);
  const [screenY, setScreenY] = useState(0);
  const [muted, setMuted]:any = useState(true);
  const reduxActions = new ReduxActions();

  useEffect(() => {
    // console.log("pppp");
    // const audio:any = new Howl({src:'/public/assets/samplemusic.mp3'});
    // audio.play()
    initialRender.current = true;
    loadingScreenRef.current.click();
    // setMuted(true)
    // audioRef.current.play()
  }, []);

  useEffect(() => {
    if(audioRef.current){
      // audioRef.current.play()
    }
  }, [audioRef])

  useEffect(()=>{
    // console.log(audioRef.current.currentTime,'ooooooo')
    // audioRef.current.currentTime = 14
    // audioRef.current.volume = 0.7
    // audioRef.current.play() 
  },[])
  

  useEffect(() => {
    // if (!initialRender.current) {
      ///loading the component ----
    if (isLoadingScreenTurnedOn) {
      loadingScreenRef.current.style.animation = "slideDown .6s forwards ease";
      bgImageRef.current.style.animation = "slideDownImage .6s forwards ease";
      wrapperImageRef.current.style.animation = "zoom-in .6s forwards ease";
      setTimeout(() => {
        quoteRef.current.style.animation = "textAnim 1.3s forwards ease";
      }, 750);
      // setTimeout(()=>{
      //   quoteRef.current.style.animation = "textAnimSlideUpSlow 12s forwards ease"
      // },1000)
    } else { /// destroying the component ----
      quoteRef.current.style.animation = "textAnimRemove .4s forwards ease";
      dispatch(updateLoadingMusicState(false));
      setTimeout(() => {
        //must be less than 1200
        loadingScreenRef.current.style.animation = "slideUp .6s forwards ease";
        bgImageRef.current.style.animation = "slideUpImage .6s forwards ease";
        // wrapperImageRef.current.style.animation = "zoom-out .6s forwards ease";
      }, 300);
      // setTimeout(() => { //just now
      //   reduxActions.dismissLoadingScreen();
      // }, 1200);
      // }
    }
    initialRender.current = false;
    console.log(initialRender);
  }, [isLoadingScreenTurnedOn]);

  return (
    <div ref={loadingScreenRef} className="loading-screen" onMouseMove={(e)=>{
      // setScreenY(e.screenY);
      // audioRef.play()
    }} onClick={()=>{
      console.log('clikeddd');
    }}>
      <div className="loading-screen-wrapper">
        <p ref={quoteRef}>"Bichess lie, compilers don't!"</p>
      </div>
      <div ref={wrapperImageRef} className="loading-screen-image-wrapper">
        {/* <button
          className="test"
          onClick={() => {
            // dispatch(updateIsLoadingScreenTurnedOn(false));
            //to play sound ---
            // setIsPlaying('PLAYING')
            // audio.play()
            // audioRef.current.play()
          }}
        >
          Test
        </button> */}
        <video ref={bgImageRef} className="vdeo" autoPlay style={{width:'100%', height:'100vh'}} loop muted id="myVideo">
          <source src="/public/assets/video4.mp4" type="video/mp4"/>
        </video>
        {/* <img
          // style={{display:'none'}}
          // ref={bgImageRef}
          className="loading-screen-bg-image"
          src="/public/assets/bgimage.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default LoadingScreen;
