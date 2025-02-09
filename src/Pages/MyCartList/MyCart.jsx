import React from 'react';
import { Link } from 'react-router-dom';
import { IoStar } from 'react-icons/io5';

const MyCart = ({ cart }) => {
    const { imgURL, itemName, subcategory, description, price, rating, customization, stock, email, name, _id } = cart;
  
    return (
        <div >
           
            <div className="card  w-96 h-3/4 mx-auto shadow-xl">
                <figure>
                    <img
                    
                        src={imgURL}
                        className='h-96'
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-[#490e0e]  text-white">
                    <h2 className="card-title text-white">{itemName}</h2>
                    <p className='font-bold text-yellow-300 '>Price: {price} TK</p>
                    <p className='flex gap-2 items-center'>Rating: <IoStar className='text-yellow-200'></IoStar> {rating}</p>
                    <p>{description.length > 200 ? description.slice(0, 100) : description}</p>
                    <div className="card-actions ">
                        
                    <Link to={`/update/${_id}`}><button className=' btn btn-primary bg-yellow-300 border-none'>Update</button></Link>
                    <button className=' btn btn-primary bg-yellow-300 border-none'>Delete</button>
                     </div>
                </div>
            </div>

        </div>
    );
};

export default MyCart;