import React, {useState, useEffect} from 'react';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const {categoriaId} = useParams();


  useEffect(() => {
    const getFS = getFirestore();
    const FSCollection = collection(getFS, 'combos');
    if (categoriaId){
    const FSFiltro = query(FSCollection, where('categoría', '==', categoriaId))
    getDocs(FSFiltro)
      .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }
    else{
      getDocs(FSCollection)
        .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }

  }, [categoriaId])
  return (
    <>
      <div className='itemList'>
      <ItemList data={data}/>
      </div>
    </>
      
  );
}

export default ItemListContainer;