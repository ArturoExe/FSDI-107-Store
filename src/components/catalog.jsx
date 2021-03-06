import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';
import { useEffect, useState } from 'react';

const Catalog = () => {

    let [product,setProduct] = useState([]);
   
    const loadCatalog = () => {
            console.log("data retrieve");
            
            let service=new DataService();
            let data=service.getCatalog();
            setProduct(data);
    }



    useEffect(()=>{

        loadCatalog();

    });


    return(
            
            <div className='catalog'>
                {
                    product.map((prod)=>(<Product key={prod._id} title={prod.title} price={prod.price} image={prod.image} />))
                }
            </div>
    );   
}

export default Catalog;