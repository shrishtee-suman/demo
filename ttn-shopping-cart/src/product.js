import React from 'react';
import './style.css';
import { Button } from "react-bootstrap";



class Product extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            
            <ul className='cart'>
                <li>
                    <img src={this.props.image} height={100} />
                </li>
                <li className='product-detail-list'>
                    <h4>{this.props.name}</h4>
                    <h4>${this.props.price}</h4>
                    {
                        this.props.qty >0 ?
                            (<h5>{this.props.qty}</h5>)
                            : (<h5>Out of stock</h5>)
                    }
                    <Button bsStyle="primary" 
                    onClick={this.props.onAddToCartHandler} 
                    disabled={this.props.qty===0}>
                    ADD TO CART
                    </Button>
                </li>
            </ul>
        )
    }
}

export default Product;