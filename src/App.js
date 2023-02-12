import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrito from './components/Carrito';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CartProvider from './components/CartContext';




function App() {
  return (
    <>
    <BrowserRouter>
    <CartProvider>
    <Navbar/>
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/categories/:categoryId" element={<ItemListContainer/>}/>
    <Route path="/item/:id" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Carrito/>}/>
    <Route path="*" element={<div>Error 404: Page not fund.</div>}/>
    
    </Routes>
    </CartProvider>
    </BrowserRouter>

    </>
   
  );
}

export default App;
