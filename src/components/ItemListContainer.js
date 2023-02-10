import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { useState,useEffect } from 'react';
import { collection,getDoc,getDocs } from 'firebase/firestore';
import { db } from '../firebase';

import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos,setProductos] = useState([])

    const {categoryId} = useParams();

    useEffect(()=>{
        const productosCollection = collection(db,"Productos");
        const pedidoFirestore = getDocs(productosCollection);

    


        pedidoFirestore
        .then((respuesta)=>{
             const productos = respuesta.docs.map(doc=>({...doc.data(),id:doc.id}))
             setProductos(productos);
           
           
        
           
            
        })
        .catch((error)=>{
           console.log(error);
        })
    


    },[])

   
 
  return (
    <div>
       
        <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer