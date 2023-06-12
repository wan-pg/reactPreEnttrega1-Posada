import './App.css';
import { NavBar } from './components/NavBar';



const ItemListContainer = ({greeting}) =>{
  return(
    <h1>{greeting}</h1>

  );
  
}

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting= "Bienvenido !!"/>
    </>
    
    
    
    
  );
}

export default App;
