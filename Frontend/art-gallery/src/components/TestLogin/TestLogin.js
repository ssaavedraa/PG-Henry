import { useState } from "react";
import useAuth from "../../customHooks/useAuth";
import GoogleLoginBtn from "../GoogleLoginBtn/GoogleLoginBtn";

function TestLogin() {
  const { isLoading, user, register, logout, login } = useAuth();
  const [inputUser, setInputUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleLogin = (e) => {
    login({ email: inputUser.email, password: inputUser.password })
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(inputUser)
      .then((user) => console.log(user))
      .catch((er) => console.log(er.message));
  };
  const handleChange = (e) => {
    setInputUser((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  return (
    <div>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          id={"firstName"}
          value={inputUser.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          id={"lastName"}
          value={inputUser.lastName}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="email"
          id={"email"}
          value={inputUser.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id={"password"}
          value={inputUser.password}
          onChange={handleChange}
        />
        <input type="submit" value="Register" />
      </form>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={() => logout()}>logout</button>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </>
      )}
      <button onClick={() => console.log(user)}>
        Mostrame lo que hay en user en consola
      </button>
    <GoogleLoginBtn onSuccess={() => {return}} onFailure={() => {return}} />
    </div>
  );
}

export default TestLogin;
