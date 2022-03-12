import { useState } from 'react';
import './quantityPicker.css'



const QuantityPicker = () => {
        //setter
        let [quantity,setQuantity]= useState(()=>{
            //We use  this type of useStato to render only the initial state of the component 
            //intead of every time the compoment re-renders
            console.log("Initial state 0");
            return 0;});

        //decrement function
        const decrement = () => {

            if(quantity<=0){
                console.log("Negative number");
            }
            else{
                console.log("Decrement number");
                setQuantity(prevQuantity=>prevQuantity-1);
            }
          

        }

        //Increment function
        const increment = () => {
            console.log("Increment Number");
            setQuantity(prevQuantity=>prevQuantity+1);


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