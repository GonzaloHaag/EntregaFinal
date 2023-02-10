import React,{useState,useContext} from 'react'
 const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({children}) => {
  
  const [carrito,setCarrito] = useState([]);
  console.log("Carrito: " + carrito);
  const [totalProductos,setTotalProductos] = useState(0);

  //  const addProduct = (item,newCantidad) => {
  //   const newCarrito = carrito.filter(prod=>prod.id!==item.id);
  //   newCarrito.push({...item,cantidad:newCantidad})
  //   setCarrito(newCarrito);
   
  //  }

  // const addProduct = (producto,cantidad) =>{
  //   const copia1 = carrito.slice(0);
  //   const copia = [...carrito];

  //   copia.push(producto);
  //   console.log(copia)

  //   setCarrito([...carrito,producto])

  // }

  //  console.log(carrito)

  const addProduct = (item,cantidad)=>{
    if(IsInCart(item.id)) {
      setCarrito(carrito.map(product=>{
        return product.id === item.id ?
        {...product,cantidad:product.cantidad + cantidad} : product
      }));
    }
    else{
      setCarrito([...carrito,{...item,cantidad}])
    }
  }
 
  const clearCart = () =>{
    setCarrito([])
  }
  const IsInCart = (id) =>{
    return carrito.find(producto=>producto.id===id) ? true : false;
  }
  const removeProduct = (id) => setCarrito(carrito.filter(producto=>producto.id!==id));

  const totalPrice = () => {
    return carrito.reduce((prev,act)=>prev + act.cantidad * act.price,0)

  }
  const totalProducts = () => carrito.reduce((acumulador,productoActual) => acumulador + productoActual.cantidad,0);


  


  return (
    <CartContext.Provider value = {{
      clearCart,
      IsInCart,
      removeProduct,
      addProduct,
      totalPrice,
      totalProducts,

      carrito
      

    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider