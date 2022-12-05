import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import MenuContext from 'context/MenuContext';
import MenuStatus from 'context/MenuStatus';

const MenuOpener = () => {
  const[menuStatus, setMenuStatus] = useState("opened");

  const toggleMenu = (menuStatus: string)=>{
    const menu = menuStatus === 'opened'? 'closed' : 'opened';
    setMenuStatus(menu);
    localStorage.setItem("menuOpened", menu);
  }   
  return(
    <Button variant="link" onClick = {() => {toggleMenu(menuStatus)}}><AiOutlineMenuFold size={32} color='#ffffff' opacity={0.7}/></Button>
  );
}

export default MenuOpener;