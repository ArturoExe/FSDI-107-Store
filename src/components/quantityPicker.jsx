import { useState } from 'react';
import './quantityPicker.css'

const QuantityPicker = () => {
        //setter
        let [quantity,setQuantity]= useState(0);

        //decrement function
        const decrement = () => {

            if(quantity<=0){
                console.log("Negative number");
            }
            else{
                console.log("Decrement number");
                setQuantity(quantity-1);
            }
          

        }

        //Increment function
        const increment = () => {
            console.log("Increment Number");
            setQuantity(quantity+1);
        }

    return(
        <div className='container-picker'>

            <button  className='button-picker' onClick={decrement}>-</button>
            <label htmlFor="button" className='quantity-label'>{quantity}</label>
            <button className='button-picker' onClick={increment}>+</button>

        </div>
    );

};

export default QuantityPicker;