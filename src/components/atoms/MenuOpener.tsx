import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import MenuContext from 'context/MenuContext';
import MenuStatus from 'context/MenuStatus';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectMenuStatus, open, close, MenuState } from 'reducers/MenuStateSlice';


type MenuOpenerProps = {
  
}
const MenuOpener = () => {
    const menuStatus = useAppSelector(selectMenuStatus);
    const dispatch = useAppDispatch();

  const toggleMenu = ()=>{
    menuStatus.status === 'closed'? dispatch(open()) : dispatch(close());
  }   
  return(
    <Button variant="link" onClick={() => toggleMenu()}>
      {menuStatus.status === 'opened' && <AiOutlineMenuFold size={32} color='#ffffff' opacity={0.7}/>}
      {menuStatus.status === 'closed' && <AiOutlineMenuUnfold size={32} color='#ffffff' opacity={0.7}/>}
    </Button>
  );
}

export default MenuOpener;