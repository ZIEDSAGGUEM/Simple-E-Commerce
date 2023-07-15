import './App.css';
import Home from './pages/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect } from 'react';
import Cart from './Components/Cart';
import { CartProvider } from 'react-use-cart';
import scrollreveal from 'scrollreveal';



function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin:"top",
      distance: "80px",
      duration:2000,
      reset:true,
    });
    sr.reveal(`
    #home,
    #cart,    
    `,
    {
      opacity:0,
      interval: 300,
    }
  );
},[]);




  
  return (
    <div className="App">
 <CartProvider>
 <Home/>
  <Cart/>
 </CartProvider>
    </div>
  );
}

export default App;
