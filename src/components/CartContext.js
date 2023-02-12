import React,{useState,useContext} from 'react'
 const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
  
  const [carrito,setCarrito] = useState([]);
  const [totalProductos,setTotalProductos] = useState(0);


  const addProduct = (item,cantidad) => {
    if(IsInCart(item.id)) {
      setCarrito(carrito.map(product=>{
        return product.id === item.id ? {...product,cantidad:product.cantidad + cantidad} : product
      }));
    }else{
      setCarrito([...carrito, {...item, cantidad}])
    }
  }


  const clearCart = () =>{
    setCarrito([])
  }
  const IsInCart = (id) =>{
    return carrito.find(producto=>producto.id===id) ? true : false;
  }
  const removeProduct = (id) => setCarrito(carrito.filter(producto=>producto.id!==id));

  
  const cartTotal = () => {
    return carrito.reduce((acc,prod)=>acc+=prod.price*prod.cantidad,0)
  }
  const cartCantidad = () => {
    return carrito.reduce((acc,prod)=>acc+=prod.cantidad,0)
  }

  


  return (
    <CartContext.Provider value = {{
      clearCart,
      IsInCart,
      removeProduct,
      addProduct,
      cartTotal,
      cartCantidad,
      carrito

    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider 