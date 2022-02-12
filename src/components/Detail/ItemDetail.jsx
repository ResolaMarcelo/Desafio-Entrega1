import React from 'react';
import Clicker from '../Clicker';
import "../../App.css"

export default function ItemDetail({ prod }) {

  

  return( 
   <div>
     <div className="item">
        
        <div className="img">
          <img className="img-detail " src={prod.pictureUrl} alt="" />
        </div>
        <div className="header-detail">{prod.title}</div>
        <div className="description-detail">{prod.description}</div>
        <div className="price-detail">$ {prod.price}</div>
        <Clicker initial="1" stock="10">Comprar</Clicker>
      </div>
  </div>
  )

}
