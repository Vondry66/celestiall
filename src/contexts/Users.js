import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({})
    // const isLoggedIn = Object.keys(loggedInUser).length > 0

return <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
    {props.children}
</UserContext.Provider>
}