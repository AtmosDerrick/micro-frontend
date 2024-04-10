import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");

  //   const logOut = () => {
  //     signOut(auth);
  //   };

  //   useEffect(() => {

  //   }, []);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
