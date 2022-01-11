import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DefaultButton from "./DefaultButton";
import './ProductsDetails.css';
import Basket from "./Basket";
import { useDispatch, useSelector } from "react-redux";

function ProductsDetails() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter)

    const addCounter = (count) => {
        dispatch({type: 'ADD_COUNTER', payload: count})
    }

    const removeCounter = (count) => {
        dispatch({type: 'REMOVE_COUNTER', payload: count})
    }

    const { productId } = useParams();
    const [data, setData] = useState({});
    const { title, image, price, description, category } = data;

    function addToBasket() {
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
        localStorage.setItem('count', counter + 1);            
    }

    function removeFromBasket() {
        localStorage.setItem('count', counter - 1);
        if (counter < 0) {
            return false;
        }            
    }

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => {
                setData(json)
            })
    }, [productId])

    return (
        <div className="products-details">
            <h1>Product name: {title}</h1>
            <h3>*Category: {category}</h3>
            <img src={image} alt={description} title={title}/>
            <p>Price: {price}$</p>
            <DefaultButton title='Add' click={(e) => { addToBasket(e); addCounter(1) }} />
            <DefaultButton title='Remove' click={(e) => { removeFromBasket(e); removeCounter(1) }} />
            <span> Count: {counter}</span>
            <Basket title={title} price={price} count={counter} />
            <div><Link to='/products'>Return to Products list</Link></div>
        </div>
    );
}

export default ProductsDetails;