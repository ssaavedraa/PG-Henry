import React from "react";
import { useState, useEffect } from "react";
import useCart from "../../customHooks/useCart.js";
import axios from "axios";
import CardsPaints from "../../containers/CardsPaints/CardsPaints.jsx";


const Cart = () => {
    const { cart, remove } = useCart();

    const getPaintings = async (cart) => {
        const paintings = [];
        for (let i=0; i < cart.length; i++) {
            const dbPaiting = await axios.get(`http://localhost:3001/painting/get/${cart[i]}`);
            paintings.push(dbPaiting.data);
        };
        return paintings
    };

    const [cartPainting, setCartPainting] = useState([]);

    useEffect(() => {
        getPaintings(cart).then(res => setCartPainting(res))
    }, [cart]);

    return (
        <div>
            <div>
                <h1>
                    My cart
                </h1>
            </div>
            <CardsPaints paintings={cartPainting} remove={remove} button={true}/>
        </div>
    );
};

export default Cart;