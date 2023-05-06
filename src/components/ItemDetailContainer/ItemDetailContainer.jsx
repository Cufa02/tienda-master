import React, {useState, useEffect} from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detalleId} = useParams();

    useEffect(()=> {
      getDoc(doc(getFirestore(), 'combos', detalleId))
      .then(res => setData({id: res.id, ...res.data()}))
  }, [])

  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer;