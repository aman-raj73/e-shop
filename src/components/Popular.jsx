import React from 'react'
import data_product from '../asset/data'
import Item from './Item'

const Popular = () => {
  return (
     <div className="container mt-5">
  <h1 className='text-center'>Our Latest Deals</h1>
  <hr />
  <div className="row mt-5 justify-content-center">
    {data_product.map((item, i) => (
      <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4" key={i}>
        <Item
          id={item.id}
          name={item.name}
          image={item.image}
          category={item.category}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      </div>
    ))}
  </div>
</div>

  )
}

export default Popular
