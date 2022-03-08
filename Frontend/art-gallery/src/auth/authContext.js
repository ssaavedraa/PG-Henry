import { createContext } from "react";

export const initalUser = {
  user: { id: -1, firstName: "guest", lastName: "", email: "", role: "guest" },
  isLoading: false,
};

const AuthContext = createContext(initalUser);

export default AuthContext;
