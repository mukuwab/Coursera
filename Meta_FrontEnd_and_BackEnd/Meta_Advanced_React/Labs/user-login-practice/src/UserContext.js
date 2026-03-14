import { createContext, useContext, useState } from "react";

//create a new context
const UserContext = createContext(undefined);

//Create provider component
export const UserProvider = ({children}) => {
    //make sure to put the {} around children to destructure it
    
    const [user] = useState(
        {
            name:"Mukuwa",
            balance: "35.00"
        }
    )  

    return (
    <UserContext.Provider value = {{user}}>
        {children}
    </UserContext.Provider>
    );
}

//external function for fetching context
export const useUser = () => useContext(UserContext)