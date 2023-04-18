import React, {useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const combos = [
  {nombre: "Kit Fotografia Iluminación", imagen:"https://http2.mlstatic.com/D_NQ_NP_656496-MLA47970622280_102021-V.jpg", id: "1", categoria: "fotografia"},
  {nombre: "Kit Fotografia Basico", imagen:"https://www.cosentinostore.com.ar/Image/0/500_500-81KimBTppQL._AC_SL1500_.jpg", id: "2", categoria: "fotografia"},
  {nombre: "Kit Fotografia de Producto", imagen:"https://m.media-amazon.com/images/I/71Es5lJ875L._AC_UF894,1000_QL80_.jpg", id: "3", categoria: "fotografia"},
  {nombre: "Kit Home Studio Basico", imagen:"https://http2.mlstatic.com/D_NQ_NP_654127-MLC44491460201_012021-V.jpg", id: "4", categoria: "musica"},
  {nombre: "Kit Guitarra Acustica", imagen:"https://m.media-amazon.com/images/I/81SZ9svygfL._AC_UF894,1000_QL80_.jpg", id: "5", categoria: "musica"},
  {nombre: "Kit Paneles Acusticos", imagen:"https://m.media-amazon.com/images/I/612w4vEXJpL._AC_SL1200_.jpg", id: "6", categoria: "musica"},
];

export const ItemListContainer = () => {

  const [data, setData] = useState([]);

  const {categoriaId} = useParams();


  useEffect(() => {
    const getData = new Promise(resolver => {
      setTimeout(() => {
        resolver(combos);
      }, 2000);
    });
    if (categoriaId){
      getData.then(res => setData(res.filter(musica => musica.categoria === categoriaId)));
    }
    else{
      getData.then(res => setData(res));
    }

  }, [categoriaId])
  
  return (
    <>
      <ItemList data={data}/>
    </>
      
  );
}

export default ItemListContainer;