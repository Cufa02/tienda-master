import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
  return (
    data.map(kit => <Item key={kit.id} info={kit}></Item>)
  );
}

export default ItemList