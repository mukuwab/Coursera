# Rules of Hooks
    1. Only call hook from a React component function
    2. Only call hooks at the top level of a React component function
    3. Allowed to call multiple state or effect hooks inside a component
    4. Make multiple hook calls in the same sequence

# Call hooks from React component functions
- do not make hook calls from regular javaScript functions
- only call from:
    > inside React component function
    > bulit in hook call from useEffect hook
    > custom hook

# Example

import { useState} from "react";

function App(){
    const [petName, setPetName] = useState("Fluffy");
    //useState hook is used at the outer-most scope of the App function
    //unlike the state variable state setting function (setPetName) can be used where ever required, like inside if statements and loops

    function nameLooper(){
        if (petName === "Fluffy"){
            setPetName("Rexy");
        }
        else if (petName === "Rexy"){
            setPetName("Gizmo");
        }
        else if (petName === "Gizmo"){
            setPetName("Fluffy");
        }
    }

    return{
        <div>
            <h1> I'm thinking to name my pet {petName} </h1>
            <button onClick = {nameLooper}> Pick a new name</button>
        </div>
    }
}

# At the top level of a React component function
- must call the hooks:
    > before a return statement
    > outside of loops, conditions, or nested functions

# Example (incorrect use)

if(data !== ''){
    useEffect( ()=> {
        setData('test data')
})
}
//hooks cannot be used inside of a conditional statement


# Multiple state hooks inside a component
- there can be multiple hook calls, as long as they are always in the same order
- cannot place hook calls inside conditionals b/c that may result in an invokation of a hook being skipped when compared with a previous render


# Example (incorrect use)

function App(){
    const [petName, setPetName] = useState("Fluffy");

    function nameLooper(){
        if (petName === "Fluffy"){
            useState("Rexy");
        }
        else if (petName === "Rexy"){
            useState("Gizmo");
        }
        else if (petName === "Gizmo"){
            useState("Fluffy");
        }
    }
    //expected output is returned when running the app. but clicking pick a new name button will return an invalid hook call error

    return{
        <div>
            <h1> I'm thinking to name my pet {petName} </h1>
            <button onClick = {nameLooper}> Pick a new name</button>
        </div>
    }
}

- if you want to call an effect conditionally, you can do so, but the conditional must be inside the hook itself

# Example (correct-use)
useEffect( () => {
    if (data !== ''){
        setData('test data')
    }
})

