import { useState, useEffect } from "react";

function useCart() {
  function cartEvent(e) {
    setCart(getArr("painting"));
  }

  function removeEvent() {
    window.removeEventListener("storage", cartEvent);
  }

  useEffect(() => {
    window.addEventListener("storage", cartEvent);
    return removeEvent;
  }, []);

  function setArr(key, arr) {
    localStorage.setItem(key, JSON.stringify(arr));
    window.dispatchEvent(new Event("storage"));
  }

  function getArr(key) {
    const storage = JSON.parse(localStorage.getItem(key));
    if (!storage) {
      return [];
    } else {
      return storage;
    }
  }

  function add(paintingId) {
    try {
      if (Array.isArray(paintingId)) {
        paintingId.forEach((p) => add(p));
        return;
      }
      const paintingArr = getArr("painting");
      const id = parseInt(paintingId);
      if (id === NaN) return;
      if (paintingArr.includes(id)) {
        return;
      }
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
      let paintingArr = getArr("painting");
      for (let i = 0; i < paintingArr.length; i++) {
        if (paintingArr[i] == paintingId) {
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
