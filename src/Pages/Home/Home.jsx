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
   

    
    return (
        <div className=''>
            <Navbar></Navbar>
            <Banner></Banner>
            

           <div className=''>
           
           
           </div>
        </div>
    );
};

export default Home;