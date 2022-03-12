import { useState, useEffect } from "react";
import axios from 'axios';

function setArr(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
  window.dispatchEvent(new Event("storage"));
};

function getArr(key) {
  const storage = JSON.parse(localStorage.getItem(key));
  if (!storage) {
    return [];
  } else {
    return storage;
  }
};


function useCart() {

  function cartEvent() {
    setCart(getArr("painting"))
  };
  
  function removeEvent() {
    window.removeEventListener("storage", cartEvent);
  };

  useEffect(() => {
    window.addEventListener("storage", cartEvent);
    return removeEvent;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function add(paintingId) {

    try {

      if (Array.isArray(paintingId)) {
        paintingId.forEach((p) => add(p));
        return;
      };

      if (localStorage.getItem("jwtToken") !== null) {
        axios.post(`http://localhost:3001/cart/add/${paintingId}`).catch(err => console.log(err));
      };

      const paintingArr = getArr("painting");
      const id = parseInt(paintingId);

      if (isNaN(id)) return;
      if (paintingArr.includes(id)) return;
      paintingArr.push(id);

      setArr("painting", paintingArr);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  const [cart, setCart] = useState(getArr("painting"));

  function remove(paintingId) {
    try {

      if (localStorage.getItem("jwtToken") !== null) {
        axios.delete(`http://localhost:3001/cart/remove/${paintingId}`).catch(err => console.log(err));
      };

      let paintingArr = getArr("painting");
      const id = parseInt(paintingId);
      if (isNaN(id)) return;
      for (let i = 0; i < paintingArr.length; i++) {
        if (paintingArr[i] === paintingId) {
          paintingArr.splice(i, 1);
          setArr("painting", paintingArr);
        }
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  function removeAll() {
    if (localStorage.getItem("jwtToken") !== null) {
      axios.delete("http://localhost:3001/cart/removeAll").catch(err => console.log(err));;
    };
    setArr("painting", []);
    localStorage.removeItem("painting");
  }

  const hooks = {
    add,
    cart,
    remove,
    removeAll,
  };
  return hooks;
}

export default useCart;
