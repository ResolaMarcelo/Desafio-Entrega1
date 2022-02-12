import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Productos from "../productos.json"
import Categoria from "./Categoria";
import { useParams, Link } from "react-router-dom"
import '../App.css';

export default function ItemListContainer(props) {

  const { categoriaId } = useParams()







  const [itemList, setItemList] = useState([]);

  const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 2000);
  });

  useEffect(() => {
    obtenerProductos.then((res) => {
      setItemList(res.filter(item => item.category === categoriaId));
    });
  }, [categoriaId]);

  return (
    <>



      <div className="title-cat">
        {categoriaId}
      </div>


      <ItemList itemList={itemList} />
    </>
  );
}