import React from 'react'
import OneProduct from './OneProduct'

const Products = ({products,onAdd}) => {
    
  return (
    <div className="all-products"> 
   
      { products.map((prod)=> (
          <OneProduct product= {prod} key={prod.id} onAdd={onAdd} inCart={1}/>
      ))}

     
    </div>
  );
};

export default Products
