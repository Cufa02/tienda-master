import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

const combos = [{nombre: "Kit Fotografia", imagen:"https://http2.mlstatic.com/D_NQ_NP_656496-MLA47970622280_102021-V.jpg", id: 1, categoria: "fotografia", precio: "$5500"},
  {nombre: "Kit Fotografia Basico", imagen:"https://www.cosentinostore.com.ar/Image/0/500_500-81KimBTppQL._AC_SL1500_.jpg", id: 2, categoria: "fotografia", precio: "$5500"},
  {nombre: "Kit Fotografia de Producto", imagen:"https://m.media-amazon.com/images/I/71Es5lJ875L._AC_UF894,1000_QL80_.jpg", id: 3, categoria: "fotografia", precio: "$5500"},
  {nombre: "Kit Home Studio Basico", imagen:"https://http2.mlstatic.com/D_NQ_NP_654127-MLC44491460201_012021-V.jpg", id: 4, categoria: "musica", precio: "$5500"},
  {nombre: "Kit Guitarra Acustica", imagen:"https://m.media-amazon.com/images/I/81SZ9svygfL._AC_UF894,1000_QL80_.jpg", id: 5, categoria: "musica", precio: "$5500"},
  {nombre: "Kit Paneles Acusticos", imagen:"https://m.media-amazon.com/images/I/612w4vEXJpL._AC_SL1200_.jpg", id: 6, categoria: "musica", precio: "$5500"},
];

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detalleId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolver => {
      setTimeout(() => {
        resolver(combos);
      },2000);
    });

    getData.then(res => setData(res.find(musica => musica.id === parseInt(detalleId))));
  }, []
  )

  return (
    <ItemDetail data={data}/>
  );
}

export default ItemDetailContainer;