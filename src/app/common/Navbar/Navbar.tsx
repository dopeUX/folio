/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import colorPallete from "../../data/colorPallete";
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
  const colorPalleteIndex = useSelector((state: RootState) => {
    return state.appReducer.colorPalleteIndex;
  });
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
          <li key={index} onMouseEnter={(e)=>{
              onItemHover(index);
           }}>
            <a className="nav-item-a" href="">
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
