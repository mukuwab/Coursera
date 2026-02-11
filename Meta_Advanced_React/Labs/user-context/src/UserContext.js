// Notice that this file as multiple exports that can be called externally
    //from other components

//import createContext from react
import { createContext } from "react";
//This function will give you a new context object back

//Need to import useContext
import { useContext } from "react";

import { useState } from "react";

//the function argument is the default value, will make undefined since the app
    //doesnt know beforehand who the logged in user will be

//Note: can also import like this:
    // import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

//Next you will need a provider component
export const UserProvider = ({children}) => {
    
    //define the state that will next be hooked to the value prop
    const [user] = useState({
        name: "John",
        email: "john@example.com",
        dob: "1/1/2000"
    });
    
//children is whatever you put between a component’s opening and closing tags.
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
    );    //The UserContext.Provider component allows consuming components to subscribe
        //to context changes
    //Accepts a value prop which will be passed to consuming components that are 
        //descendants of this provider
    //The value prop in this case will be the authenticated user
};


//Next provide a way for components to subscribe to the context
//Create a custom hook that wraps the userContext hook
    //way to consume the context value
export const useUser = () => useContext(UserContext);
//external function created for convience so there is no need to export UserContext
    //to external components
