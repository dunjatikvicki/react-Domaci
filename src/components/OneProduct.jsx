import React from 'react'


function OneProduct({product,onAdd,inCart}) {
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} >
     
     <div className={inCart === 1 ? "card-img-top" : "card-img-left"}>
        <p className="card-img">{product.img}</p>
     </div>
       
       
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price">{product.price}</p>
       
        
      </div>
   
      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            Dodaj u korpu
          </button>
          
        </>
      ) : (
        <h4>Broj proizvoda u korpi: {product.amount}</h4>
      )}
    </div>
  );
}

export default OneProduct
