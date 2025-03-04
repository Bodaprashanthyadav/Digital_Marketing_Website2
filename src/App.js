import './App.css';
import Header from './features/Header';
import { Outlet } from 'react-router-dom';
import Footer from './features/Footer';
function App() {
    
  return (
  
      <div>
        <Header></Header>
     
       <Outlet></Outlet>
      <Footer/>
     </div>
      
    

      
      
    
  );
}

export default App;
