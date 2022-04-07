import './App.css';
import NavigatorBar from './components/NavigatorBar';
import Home from './screens/Home';
import Search from './screens/Search';
import Preferences from './screens/Preferences'
import { useState } from 'react';

function App() {

  const [value, setValue] = useState(1);
  
  // El swith sirve para cambiar el estado de la pantalla principal. Navega la barra inferior.
  // Inicialmente renderizamos la pantalla de home.

  const screen = (value) => {
    switch (value) {
      case 1:
        return <Home />

      case 2:
         return <Search />     
  
        case 3:
        return <Preferences func={setValue} />            
  
      default:
        break;
    }  
  }

  // Funciones que se pasan a los elementos hijos para a través de ellas cambiar el estado del elemento padre.
  function selectHome(){
    setValue(1);
  }

  function selectSearch(){
    setValue(2);
  }

  function selectPreferences(){
    setValue(3);
  }
  
  return (
    <div className="App">
      <header className="App-header">

      {screen(value)}

      <NavigatorBar func={{home: selectHome, search: selectSearch, preferences: selectPreferences}}/>
      </header>
    </div>
  );
}

export default App;
