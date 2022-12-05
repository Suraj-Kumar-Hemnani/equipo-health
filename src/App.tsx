import './App.css';
import Dashoard from './components/pages/Dashoard';
import MenuContext from 'context/MenuContext';
import { useState } from 'react';

function App() {  
  const [menuStatus, setMenuStatus] = useState('menuOpened')

  return (		
			<div className="App">
				<Dashoard></Dashoard>
			</div>		
  );
}



export default App;
