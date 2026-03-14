# Side Effect
- something that makes a function impure

# Pure Functions
- have no side effects
- should receive specific input (specific parameter) and will always return the exact same output no matter how many times it gets involked

    # Example

    function EstablishedYear(props){
        return <h1>Established year: {props.year}</h1>
    }

    function App(){
        return <EstbalishedYear year={2003}/>
    }

    export default App;

    //the EstablishedYear function has no side effects

# Impure Funcions
- have side effects
- performs a side effect:
    > involking console.log
    > involking fetch
    > involking brower's geolocation functionality
- side effect is something outside of or external to a function

    # Example

    function ShoppingCart(props){
        const total = props.count * props.price;
        console.log(total);
        return <h1>Total: {total}</h1>

        export default function App() {
            return (
                <ShoppingCart items={5} pricePerItem={10}/>
            )
        }
    }
    -----------------
    - impure because of console.log(total)
        > console log call makes function impure b/c it calls to a browser API
        > function depends on something outside of itself and even outside of the React app to work properly

- Important to refine impure actions within their own special areas
    > done by using the useEffect hook in React
    
    # Example

    import {useEffect} from react

    
    function ShoppingCart(props){
        const total = props.count * props.price;
        
        /* useEffect (function(){
            console.log(total);
        }, [])

        */

        // use effect accepts two parameters: callback function and array
        // common to use arrow function as the first argument of its invokation
            // ex: useEffect(()=>console.log(total),[])
        
        useEffect(()=>console.log(total),[])


        return <h1>Total: {total}</h1>

        export default function App() {
            return (
                <ShoppingCart items={5} pricePerItem={10}/>
            )
        }
    }