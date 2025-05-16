// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Residence from './pages/Residence';
import ResidenceCategory from './pages/ResidenceCategory';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Cart from './pages/Cart';


import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Residence/>}/>
         <Route path='/Bathroom' element={<ResidenceCategory category="bathroom"/>}/>
         <Route path='/Bedroom' element={<ResidenceCategory category="bedroom"/>}/>
         <Route path='/Kitchen' element={<ResidenceCategory category="kitchen"/>}/>
         <Route path='/Livingroom' element={<ResidenceCategory category="livingroom"/>}/>
         <Route path='/product/:productId' element={<Product />} />
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/login' element={<LoginSignup/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
