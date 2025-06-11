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
    <Route path='/men' element={<Shopcategory/>}/>
    <Route path='/women' element={<Shopcategory/>}/>
    <Route path='/kids' element={<Shopcategory/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path="/product/:productId" element={<Product/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
