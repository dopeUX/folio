import React, { useEffect,useState, useRef, useLayoutEffect } from "react";
import "./LoadingScreen.component.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  updateIsLoading,
  updateIsLoadingScreenTurnedOn,
} from "../../store/AppSlice";
import Sound from 'react-sound';
import sampleMusic from '../../../assets/samplemusic.mp3';
import {Howl, Howler} from 'howler';

const LoadingScreen: React.FC<any> = () => {
  const isLoading = useSelector((state: RootState) => {
    return state.appReducer.isLoading;
  });
  const isLoadingScreenTurnedOn = useSelector((state: RootState) => {
    return state.appReducer.isLoadingScreenTurnedOn;
  });
  const dispatch = useDispatch();
  const loadingScreenRef: any = useRef();
  const bgImageRef: any = useRef();
  const initialRender = useRef(true);
  const quoteRef: any = useRef();
  const [isPlaying, setIsPlaying] = useState('');
  const audioRef:any = useRef(null);
  const [screenY, setScreenY] = useState(0);
  const [muted, setMuted]:any = useState(true);
  useEffect(() => {
    // console.log("pppp");
    // const audio:any = new Howl({src:'/public/assets/samplemusic.mp3'});
    // audio.play()
    initialRender.current = true;
    // setMuted(true)
    // audioRef.current.play()
  }, []);

  useEffect(() => {
    if(audioRef.current){
      // audioRef.current.play()
    }
  }, [audioRef])

  useEffect(()=>{
    console.log(audioRef.current.currentTime,'ooooooo')
    audioRef.current.currentTime = 14
    audioRef.current.play() 
    audioRef.current.volume = 0.7
  })
  

  useEffect(() => {
    // if (!initialRender.current) {
    if (isLoadingScreenTurnedOn) {
      loadingScreenRef.current.style.animation = "slideDown .6s forwards ease";
      bgImageRef.current.style.animation = "slideDownImage .6s forwards ease";
      setTimeout(() => {
        quoteRef.current.style.animation = "textAnim .6s forwards ease";
      }, 750);
      setTimeout(()=>{
        quoteRef.current.style.animation = "textAnimSlideUpSlow 12s forwards ease"
      },1000)
    } else {
      quoteRef.current.style.animation = "textAnimRemove .4s forwards ease";
      setTimeout(() => {
        loadingScreenRef.current.style.animation = "slideUp .6s forwards ease";
        bgImageRef.current.style.animation = "slideUpImage .6s forwards ease";
      }, 300);
      setTimeout(() => {
        dispatch(updateIsLoading(false));
      }, 1200);
      // }
    }
    initialRender.current = false;
    console.log(initialRender);
  }, [isLoadingScreenTurnedOn]);

  return (
    <div ref={loadingScreenRef} className="loading-screen" onMouseMove={(e)=>{
      // setScreenY(e.screenY);
      // audioRef.play()
    }}>
      <div className="loading-screen-wrapper">
        <p ref={quoteRef}>"bichess lie, compilers don't!"</p>
      </div>
      <div className="loading-screen-image-wrapper">
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
        <audio style={{display:'none'}} id="backgroundMusic" ref={audioRef} autoPlay={true} src="/public/assets/paranoid.mp3" controls muted={false}></audio>
        <Sound
         url={'/public/assets/samplemusic.mp3'}
         playStatus={isPlaying === 'PLAYING' ? 'PLAYING' : 'STOPPED'}
         playFromPosition={0}
         onFinishedPlaying={()=>{
          return null
         }}
        />
        <img
          ref={bgImageRef}
          className="loading-screen-bg-image"
          src="/public/assets/bgimage.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
