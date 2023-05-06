import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

const Item = ({info}) => {

  return (
    <Link to={`/detalle/${info.id}`} className='combos'>
      <img src={info.imagen} alt=''/>
      <p>{info.nombre}</p>
    </Link>
  );
}

export default Item;