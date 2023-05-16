/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import colorPallete from "../../data/colorPallete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateIsLoading, updateIsLoadingScreenTurnedOn, updateNavScreenState, updateScreenZoomState } from "../../store/AppSlice";
interface NavbarProps {
  navItems: Array<any>;
  onItemHover: any;
}
const Navbar: React.FC<NavbarProps> = ({ navItems, onItemHover }) => {
  const isAccentColor = useSelector((state: RootState) => {
    return state.appReducer.isAccentColor;
  });
  // const accentColor = useSelector((state:RootState)=>{
  // 	return state.appReducer.accentColor;
  // })
  const dispatch = useDispatch();
  const colorPalleteIndex = useSelector((state: RootState) => {
    return state.appReducer.colorPalleteIndex;
  });
  const navigate = useNavigate();
  const navListItemRef:any = useRef();
  const [currentItemActive, setCurrentItemActive] = useState<number|null>(null);
  const accentColor = colorPallete[colorPalleteIndex].colorHex;
  const itemRef: any = useRef();

  useLayoutEffect(() => {
    if (!isAccentColor) {
      itemRef.current.style.color = accentColor;
    } else {
      itemRef.current.style.color = "white";
    }
  }, []);
  return (
    <ul ref={itemRef} className="navbar-items">
      {navItems.map((item: any, index: number) => {
        return (
          <li className={``} key={index} onMouseEnter={()=>{
              onItemHover(index);
              setCurrentItemActive(index);
           }}
           onMouseLeave={()=>{
            setCurrentItemActive(null);
           }}>
            <a className={`nav-item-a ${currentItemActive===index ? 'gradient-anim' : ""}`} href="" onClick={(e)=>{
              e.preventDefault();
              dispatch(updateIsLoading(true));
              dispatch(updateIsLoadingScreenTurnedOn(true));
              dispatch(updateScreenZoomState("scale(1)"));
              setTimeout(() => {
                dispatch(updateNavScreenState());
              }, 600);

              setTimeout(()=>{
                navigate(navItems[index].route)
              },1300)  
            }}>
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
