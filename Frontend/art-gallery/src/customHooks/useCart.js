import { useState, useEffect } from 'react';


function useCart() {
    function cartEvent(e) {
        setCart(getArr('painting'));
    }

    function removeEvent() {
        window.removeEventListener("storage", cartEvent)
    };

    useEffect(() => {
        window.addEventListener("storage", cartEvent);
        return removeEvent
    }, []);

    function setArr(key, arr) {
        localStorage.setItem(key, JSON.stringify(arr));
        window.dispatchEvent(new Event('storage'));
    };

    function getArr(key) {
        return JSON.parse(localStorage.getItem(key));
    };

    function add (paintingId) {
        try {
            if (paintingId === '') {
                return
            }
            let paintingArr = getArr('painting');
            if (!paintingArr) {
                setArr('painting', [paintingId]);
                return
            };
            if (paintingArr.includes(paintingId)) {
                return
            }
            paintingArr.push(paintingId);
            setArr('painting', paintingArr);
        } catch (err) {
            console.log(err);
            return err
        }
    };

    const [cart, setCart] = useState(getArr('painting'));

    function remove(paintingId) {
        try {
            let paintingArr = getArr('painting');
            for (let i=0; i < paintingArr.length; i++) {
                if (paintingArr[i] == paintingId) {
                    paintingArr.splice(i, 1);
                    setArr('painting', paintingArr)
                }
            };
        } catch (err) {
            console.log(err);
            return err
        }
    };

    function removeAll() {
        setArr('painting', []);
        localStorage.removeItem('painting');
    };

    const hooks = {
        add,
        cart,
        remove,
        removeAll
    }
    return hooks
};


export default useCart;