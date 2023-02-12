

import { useCartContext } from './CartContext'

import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../firebase';
import swal from 'sweetalert';

const Carrito = () => {


  const {carrito,cartTotal} = useCartContext();
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  const [usuarios,setUsuarios] = useState([]);

  if(carrito.length === 0) {
    return(
      <div className='carrito-vacio'>
      <p>No hay elementos en el carrito</p>
      <Link to="/">Realizar compras</Link>
      </div>
    );
  }

  const handleChangeName = (e) =>{
    setNombre(e.target.value)
  }
  const handleChangeEmail = (e) => {

   setEmail(e.target.value)

  }
  const handleTerminar = (e) =>{
    e.preventDefault();


    let copia = [...usuarios];
    const usuario = {
      nombre:nombre,
      email:email,

    }
    copia.push(usuario);
    setUsuarios(copia);

  
  

   
    const compra = {
      usuario: {
        nombre:nombre,
        email:email
        

      },
      productos:[{carrito}],
      fecha:serverTimestamp()
    }
    const ventasCollection = collection(db,"ventas");
    const pedido = addDoc(ventasCollection,compra);
    pedido
    .then((resultado)=>{

      if(nombre.length > 0 && email.length > 0) {
      swal({
      
          title: "Compra finalizada",
          text: "Felicitaciones! Tu order id es : " + resultado.id,
          icon: "success"
          
       
      })
     
    }
    else{
      swal("Complete todos los campos");
    }
    })
    .catch(error=>{
      swal("Error,intente nuevamente" +  error)
    });
 

    
  }

  return(

   <div>
    <h1 className='h1-cart'>Tu carrito</h1>
    {
      carrito.map(product=> <ItemCart key={product.id} product={product}/>)

    }
    <p className='precioTotal'>
      Total a pagar : ${cartTotal()}
    </p>
    <form className='form'>
      <h3>Rellene el formulario para completar la compra</h3>
      <input onChange={handleChangeName} type="text" placeholder='Nombre' required/>
      <input type="text" placeholder='Apellido' required/>
      <input type="text" placeholder='Telefono' required/>
      <input onChange={handleChangeEmail} type="email" placeholder='Email' required/>
      <button onClick={handleTerminar}>Terminar compra</button>

    </form>
    
   </div>
  

  )
}

export default Carrito