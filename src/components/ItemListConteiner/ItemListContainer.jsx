import React, { useEffect, useState } from 'react';
import { getProductos } from '../../asyncMock';


const ItemListContainer = ({ saludos }) => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    getProductos()
      .then((res) => console.log(res));
     .catch()
    .finally(setCargando(false)),}
    


  

}

export default ItemListContainer;

getProductos