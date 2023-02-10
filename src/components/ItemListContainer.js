import React from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList';
import { useState,useEffect } from 'react';
import { queryCollection,collection,getDoc,getDocs, query,where } from 'firebase/firestore';
import { db } from '../firebase';


import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos,setProductos] = useState([])

    const {categoryId} = useParams();

    useEffect(()=>{
   
      const productosCollection = collection(db,"Productos");

     if(categoryId) {
      const queryFilter = query(productosCollection,where("Categoria","==",categoryId))
      getDocs(queryFilter)
      .then(res=>setProductos(res.docs.map(product=>({id:product.id,...product.data()}))))

     }
     else{
      getDocs(productosCollection)
      .then(res=>setProductos(res.docs.map(product=>({id:product.id,...product.data()}))))
     }


    },[categoryId])

   
 
  return (
    <div>
       
        <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer