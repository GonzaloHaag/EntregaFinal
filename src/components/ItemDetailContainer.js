import React from 'react'
import ItemDetail from './ItemDetail'
import { useState,useEffect } from 'react'
import { collection } from 'firebase/firestore';
import { db } from '../firebase';
import { getDoc,doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';





const ItemDetailContainer = () => {

    const [producto,setProducto] = useState([]);
    const{id} = useParams();
  


    useEffect(()=>{
        swal("Cargando producto...")

        const productosCollection = collection(db,"Productos");
        const referencia = doc(productosCollection,id);
        const pedido = getDoc(referencia);

        pedido
        .then((respuesta)=>{
            const producto = {
              id:respuesta.id,
              ...respuesta.data()
             
            }
            setProducto(producto);
            swal({
              title:"Producto cargado!",
              icon:"success"
            })
           
        })
        .catch((error)=>{
            swal("Error,intente nuevamente" +  error)
        })

        
    },[])

  return (
    <ItemDetail {...producto}/>
  )
}

export default ItemDetailContainer