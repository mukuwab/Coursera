# Spread Operator
- can be applied to different data types in javascript
    > arrays
    > objects
    > strings
- react props are objects
- copying and merging objects can be done using this operator

# Copying an object

const order = {
    id: 1,
    username: "John Doe",
    item: "Pizza",
    price: "$30.00"
};

//copying the order array
const orderCopy = {...order}


//amending to the array in a new copy
const orderAmend = {
    ...order,
    item: "Breadsticks"
}
//can change property or add new property


# Order List Example
- details how spread operator saves time and prevents having to input props manually

function OrderList() {
    const order = {
        id: 1,
        username: "John Doe",
        item: "Pizza",
        price: "$30.00"
    };
    return <Order {order...}/>;
}