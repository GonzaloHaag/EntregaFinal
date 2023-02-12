import React from 'react'
import ItemList from './ItemList';
import { useState,useEffect } from 'react';
import {collection,getDocs, query,where } from 'firebase/firestore';
import { db } from '../firebase';
import swal from 'sweetalert';


import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos,setProductos] = useState([])

    const {categoryId} = useParams();

    useEffect(()=>{

      swal("Cargando Productos...")
   
      
      const productosCollection = categoryId ? query(collection(db, "Productos"), where("Categoria", "==", categoryId)):collection(db,"Productos");
        const pedidoFirestore = getDocs(productosCollection);
        pedidoFirestore
        .then((respuesta)=>{
             const productos = respuesta.docs.map(doc=>({...doc.data(),id:doc.id}))
             setProductos(productos);
             swal({
              title:"Productos Cargados!",
              icon:"success"
             })
        })
        .catch((error)=>{
          swal("Hubo un error,intente nuevamente" + error);
        })

    },[categoryId])


   
 
  return (
    <div>
       
        <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer