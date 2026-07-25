
import Navbar from './Components/Navbar';
import ResidenceCategory from './pages/ResidenceCategory';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Ourservices from './Ourservices/Ourservices';
import Portfolio from './pages/Portfolio';
import Product from './pages/Product';
import Cart from './pages/Cart';
import OrderForm from './pages/OrderForm';



import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ResidenceContextProvider from './Context/ResidenceContext';
function App() {


  return (
    < div>
      <ResidenceContextProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Ourservices" element={<Ourservices />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={< Login />} />
         <Route path='/services/Bathroom' element={<ResidenceCategory category="bathroom"/>}/>
         <Route path='/services/Bedroom' element={<ResidenceCategory category="bedroom"/>}/>
         <Route path='/services/Kitchen' element={<ResidenceCategory category="kitchen"/>}/>
         <Route path='/services/Livingroom' element={<ResidenceCategory category="livingroom"/>}/>
         <Route path='/product/:productId' element={<Product />} />
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/OrderForm' element={<OrderForm/>}/>
        
       
      </Routes>
      </BrowserRouter>
      </ResidenceContextProvider>
     </div> 
  );
 }

export default App;
