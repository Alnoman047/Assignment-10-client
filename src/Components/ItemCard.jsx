import React from 'react';

import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const ItemCard = ({ item }) => {
  const{imgURL,itemName,subcategory,description,price,rating,customization,stock,email,name,_id}=item
    return (
        <div className="card  w-96 h-3/4 mx-auto shadow-3xl rounded-xl">
  <figure>
    <img
      src={imgURL}
      className='h-96'
      alt="Shoes" />
  </figure>
  <div className="card-body   text-black">
    <h2 className="card-title text-black">{itemName}</h2>
    <p className='font-bold text-yellow-600  '>Price: {price} TK</p>
    <p className='flex gap-2 items-center'>Rating: <IoStar className='text-yellow-200'></IoStar> {rating}</p>
    <p>{description.length>200?description.slice(0,100):description}</p>
    <div className="card-actions ">
      <Link to={`/viewDetails/${_id}`}><button className="btn btn-primary text-black bg-yellow-600 border-none">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default ItemCard;