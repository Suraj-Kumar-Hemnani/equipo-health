import { createContext, useContext } from "react";


export type GlobalContent = {
  status: string
  setStatus:(c: string) => void
}

const MenuContext = createContext<GlobalContent>({
  status: 'menuOpened', 
  setStatus: () => {},
  });

export default MenuContext;
export const useGlobalContext = () => useContext(MenuContext);