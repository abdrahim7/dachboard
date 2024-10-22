
/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
//1- creat a context to stock the data without using the local storage its more secure and ather files can access to this data

export const User = createContext({});

export default function UserProvider({children}) {
  const [auth, setAuth] = useState({});
  return <User.Provider value={{auth, setAuth}}>{children}</User.Provider>;
  
}
