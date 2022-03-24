import axios from "axios";
import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import AuthContext from "../../auth/authContext";
import userSet from "../../auth/utils/userSet";
import useCart from "../../customHooks/useCart.js";

export default function GoogleLoginBtn({ renderProp }) {
  const { add, removeAll } = useCart();
  const { setUser } = useContext(AuthContext);
  const cartSync = (paintings) => {
    if (paintings) {
      add(paintings);
    }
    axios
      .get("/cart/getAll")
      .then((res) => {
        if (Array.isArray(res.data)) {
          add(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const successResponseGoogle = (res) => {
    const paintings = JSON.parse(localStorage.getItem("painting"));
    removeAll();

    axios
      .post("/user/google/login", { tokenId: res.tokenId })
      .then(({ data }) => {
        if (data.status === "error") throw new Error(data.message);
        userSet(data.token);
        setUser((prev) => {
          return { ...prev, user: data.user };
        });

        cartSync(paintings);
      })
      .catch((err) => console.log(err));
  };

  const failureResponseGoogle = (err) => {};

  return (
    <GoogleLogin
      clientId="977904409468-8atr4k7egvd106g4c57nc0hut690hpjl.apps.googleusercontent.com"
      onSuccess={successResponseGoogle}
      onFailure={failureResponseGoogle}
      cookiePolicy={"single_host_origin"}
      render={renderProp}
    />
  );
}
