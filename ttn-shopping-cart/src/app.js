import React, { Fragment, Component } from 'react';
import { connect } from "react-redux";

import Product from './product';
import Cart from "./cart";

import './style.css';

class App extends React.Component{

    onAddToCartHandler = (data) => {
        this.props.decQty(data);
    };

    onIncCartQtyHandler = (cartData) => {
        this.props.incCartQty(cartData);
    };

    onDecCartQtyHandler = (cartData) => {
        this.props.decCartQty(cartData);
    };

    onDeleteCartItemHandler = (cartData) => {
        this.props.deleteCartItem(cartData);
    };

    total=()=>{
        return(
            <h2>total price is:{this.totalPrice(this.props.cart)}</h2>
        )
    }

    totalPrice=(data)=>{
        return data.reduce((accum,item)=>{
            accum+= item.price * item.quantity;
            return accum;
        },0)
    }


    render(){
        let _list = this.props.products.map((data) =>{
            return (
                <Fragment key={data.id}>
                    <Product image={data.image} name={data.name} qty={data.quantity} price={data.price} onAddToCartHandler={() => this.onAddToCartHandler(data)}/>
                </Fragment>
            )
        });

        let cart_list = this.props.cart.map((cartData) =>{
            return (
                <Fragment key={cartData.id}>
                    <Cart product={cartData} onIncCartQtyHandler={()=>this.onIncCartQtyHandler(cartData)} onDecCartQtyHandler={()=>this.onDecCartQtyHandler(cartData)} onDeleteCartItemHandler={()=>this.onDeleteCartItemHandler(cartData)} />
                </Fragment>
            )
        });

        return(
            <div className='container'>
                <h2>TTN MART</h2>
                <div className='shop-container'>
                    <div className='left-store'>
                        <div className='product-container'>{_list}</div>
                    </div>
                    <div className='right-cart'>
                        <h2>MY CART</h2>
                        {/* <div className='cart-container'>{cart_list}</div> */}
                        {
                            this.props.cart.length!==0 ? 
                            <div className='cart-container'>{cart_list}{this.total()}</div> :
                            <div> cart is empty</div>
                            
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.userReducer.products,
        cart: state.cartReducer.cart,
    }
};

const mapDispatchToProps = dispatch => ({
    decQty: (data) => dispatch({ type: 'decQTY',payload: data }),
    incCartQty: (cartData) => dispatch({ type: 'INC_CART_QTY',payload: cartData }),
    decCartQty: (cartData) => dispatch({ type: 'DEC_CART_QTY',payload: cartData }),
    deleteCartItem: (cartData) => dispatch({ type: 'DELETE',payload: cartData , availableQty: cartData.quantity})
});

export default connect(mapStateToProps,mapDispatchToProps)(App);

