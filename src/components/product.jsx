import './product.css'
import QuantityPicker from './quantityPicker';


const Product = (props) => {


 

    return(
        <div className='product'>
            <div className='images'>
                <img src={"./img/"+props.image} />    
            </div>

            <h2>{props.title}</h2>
            <div className='priceTags'>
            <label>$Price {props.price}</label>
            <label>$Total</label>
            </div>
            
            <QuantityPicker></QuantityPicker>
            <button>Buy</button>
        </div>
    )
}

export default Product;