import React from 'react';
import Navbar from '../../Components/Navbar';
import "flyonui/dist/js/accordion"
import ill from "../../../public/ill.png"
import ill2 from "../../../public/ill2.png"
import ill3 from "../../../public/ill3.png"
import Banner from '../../Components/Banner';
import { useLoaderData } from 'react-router-dom';
import ItemCard from '../../Components/ItemCard';


const Home = () => {
    const items = useLoaderData();

    
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            

           <div className=''>
           
            <div>
            <h2 className="text-center text-4xl mb-10 text-white font-bold">Our Items</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
                {
                  items.map(item=><ItemCard item={item} key={item._id}></ItemCard>)
                }
                </div>
            </div>

           </div>
        </div>
    );
};

export default Home;