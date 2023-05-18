/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Homepage.component.css";
import Hamburger from "../../common/Hamburger/Hamburger";
import OutlinedButton from "../../common/OutlinedButton/OutlinedButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import colorPallete from "../../data/colorPallete";

const Homepage: React.FC<any> = () => {
  //   const accentColor = useSelector((state: RootState) => {
  //     return state.appReducer.accentColor;
  //   });
  const colorPalleteIndex = useSelector((state: RootState) => {
    return state.appReducer.colorPalleteIndex;
  });
  const accentColor = colorPallete[colorPalleteIndex].colorHex;
  const imageRef: any = useRef();
  const audioRef:any = useRef(null);
  useLayoutEffect(() => {
    imageRef.current.style.filter = colorPallete[colorPalleteIndex].filter;
    // accentColor = colorPallete[colorPalleteIndex].colorHex;
  }, [colorPalleteIndex]);
  useEffect(()=>{
    // audioRef.current.play()
  })
  return (
    <section className="homepage">
      <h1 className="head-anim">Bonjour!</h1>
      <p>
        Lorem ipsum is typically a corrupted version of De finibus bonorum et
        malorum, a 1st-century BC text by the Roman statesman and philosopher
        Cicero, with words altered, added, and removed to make it nonsensical
        and improper Latin.Versions of the Lorem ipsum text have been used in
        typesetting at least since the 1960s, when it was popularized by
        advertisements for Letraset transfer sheets.[1] Lorem ipsum was
        introduced to the digital world in the mid-1980s, when Aldus employed it
        in graphic and word-processing templates for its desktop publishing
        program PageMaker. Other popular word processors, including Pages and
        Microsoft Word, have since adopted Lorem ipsum,[2] as have many LaTeX
        packages,[3][4][5] web content managers such as Joomla! and WordPress,
        and CSS libraries such as Semantic UI
      </p>

      <div className="homepage-social-logos">
        <a href="">
          <img
            ref={imageRef}
            className={`${colorPallete[colorPalleteIndex].name}`}
            src="/public/assets/github-logo.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            ref={imageRef}
            className={`${colorPallete[colorPalleteIndex].name}`}
            src="/public/assets/linkedin-logo.svg"
            alt=""
          />
        </a>
      </div>
      <audio id="backgroundMusic" ref={audioRef} autoPlay={true} src="/public/assets/samplemusic.mp3" controls muted={false}></audio>
      <a href="">
        <OutlinedButton
          title="Resume"
          classN="homepage-download-btn"
          color={accentColor}
        >
          <img
            className={`download-btn-icon ${colorPallete[colorPalleteIndex].name}`}
            src="/public/assets/download.svg"
            alt=""
          />
        </OutlinedButton>
        {/* <button className="outlined-btn homepage-download-btn">Resume <img className="download-btn-icon" src="/public/assets/download.svg" alt="" /></button> */}
      </a>
    </section>
  );
};

export default Homepage;
