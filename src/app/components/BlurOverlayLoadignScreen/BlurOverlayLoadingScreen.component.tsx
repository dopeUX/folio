import React, { useEffect, useRef } from "react";
import "./BlurOverlayLoadingScreen.component.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  updateIsLoading,
  updateIsLoadingScreenTurnedOn,
} from "../../store/AppSlice";

const BlurOverlayLoadingScreen: React.FC<any> = () => {
  const isLoadingScreenTurnedOn = useSelector((state: RootState) => {
    return state.appReducer.isLoadingScreenTurnedOn;
  });
  const dispatch = useDispatch();
  const blurLayoutRef: any = useRef();
  useEffect(() => {
    if (isLoadingScreenTurnedOn) {
      blurLayoutRef.current.style.animation = "blurAnim .5s ease forwards";
    } else {
      blurLayoutRef.current.style.animation =
        "blurAnimRemove .5s ease forwards";
      setTimeout(() => {
        dispatch(updateIsLoading(false));
      }, 1200);
    }
  }, [isLoadingScreenTurnedOn]);

  return (
    <div ref={blurLayoutRef} className="blur-overlay-loading-screen">
      <p>"bitches lie, compilers don't!"</p>
      {/* <button
        onClick={() => {
          dispatch(updateIsLoadingScreenTurnedOn(false));
        }}
      >
        test
      </button> */}
    </div>
  );
};

export default BlurOverlayLoadingScreen;
