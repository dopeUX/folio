import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./LoadingScreen.component.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  updateIsLoading,
  updateIsLoadingScreenTurnedOn,
} from "../../store/AppSlice";

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

  useEffect(() => {
    // console.log("pppp");
    initialRender.current = true;
  }, []);

  useEffect(() => {
    // if (!initialRender.current) {
    if (isLoadingScreenTurnedOn) {
      loadingScreenRef.current.style.animation = "slideDown .6s forwards ease";
      bgImageRef.current.style.animation = "slideDownImage .6s forwards ease";
    } else {
      loadingScreenRef.current.style.animation = "slideUp .6s forwards ease";
      bgImageRef.current.style.animation = "slideUpImage .6s forwards ease";
      setTimeout(() => {
        dispatch(updateIsLoading(false));
      }, 700);
      // }
    }
    initialRender.current = false;
    console.log(initialRender);
  }, [isLoadingScreenTurnedOn]);

  return (
    <div ref={loadingScreenRef} className="loading-screen">
      <div className="loading-screen-wrapper">
        <p>"bichess lie, compilers don't!"</p>
      </div>
      <div className="loading-screen-image-wrapper">
        <button
          className="test"
          onClick={() => {
            dispatch(updateIsLoadingScreenTurnedOn(false));
          }}
        >
          Test
        </button>
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
