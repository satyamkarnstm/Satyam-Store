//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './webPages/Home';
import Cart from './webPages/Cart';
import Login from './webPages/Login';
import Navbar from'./webPages/Navbar';
import Products from './webPages/Products';
import Contact from './webPages/Contact';
import Footer from './webPages/Footer';
import SingleProduct from './webPages/SingleProduct';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<SingleProduct/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
