import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import Shopcategory from './pages/Shopcategory'
import Product from './pages/Product'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
   

   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/men' element={<Shopcategory type="men"/>}/>
    <Route path='/women' element={<Shopcategory type="women"/>}/>
    <Route path='/kids' element={<Shopcategory type="kids"/>}/>
    <Route path='/casual' element={<Product category="casual"/>}/>
    <Route path='/western' element={<Product category="western"/>}/>
    <Route path='/winter' element={<Product category="winter"/>}/>
    <Route path='/summer' element={<Product category="summer"/>}/>
    <Route path="/product/:productId" element={<Product/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
