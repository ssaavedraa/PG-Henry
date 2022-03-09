import React from "react";
import { useState, useEffect } from "react";
import useCart from "../../customHooks/useCart.js";
import axios from "axios";


const Cart = () => {
    const { cart, remove, add } = useCart();

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
            <div>
                {cartPainting.map((painting) => (
                    <div key={painting.id}>
                        <h1>{painting.name}</h1>
                        <img src={painting.photos[0].url} alt="No img" />
                        <p>{painting.description}</p>
                        <h2>{painting.artist.name}</h2>
                        <p>Size: {painting.height} x {painting.width}</p>
                        <button onClick={() => remove(painting.id)}>x</button>
                    </div>
                ))}
            </div> 
            <button onClick={() => add([1,2,3,4])}>Add paintings to cart</button>
        </div>
    );
};

export default Cart;