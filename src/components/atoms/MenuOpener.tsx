import { Button } from 'react-bootstrap';
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectMenuStatus, open, close } from 'reducers/MenuStateSlice';

const MenuOpener = () => {
    const menuStatus = useAppSelector(selectMenuStatus);
    const dispatch = useAppDispatch();

  const toggleMenu = ()=>{
    menuStatus.status === 'closed'? dispatch(open()) : dispatch(close());
  }   
  return(
    <Button variant="link" onClick={() => toggleMenu()}>
      {menuStatus.status === 'opened' && <AiOutlineMenuFold size={32} color='#ffffff' opacity={0.9}/>}
      {menuStatus.status === 'closed' && <AiOutlineMenuUnfold size={32} color='#ffffff' opacity={0.9}/>}
    </Button>
  );
}

export default MenuOpener;