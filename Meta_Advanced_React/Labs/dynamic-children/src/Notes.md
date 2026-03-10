# Imports

2 methods

1. Import React as a global object & Access as Methods on the object
Import React from 'react;
React.cloneElement(...)

2. Import as a 'named import'
Import {cloneElement} from 'react';
cloneElement(...)

# React.cloneElement
-clones and returns a new copy of a provided element

React.cloneElement(element,[props])

-the first argument is the react element you would like to clone
-the second argument is the props that will be added and merged with the orgional props passed into the component


* Props in react are immutable objects so you must create a copy of the element first and perform the transformation in the copy
    > what React.cloneElement allows you to do

React.cloneElement API allows the parent to perform:
    1. Modification of children properties
    2. Adding to children properties
    3. Extending the functionality of children components


# React.Children

React.Children.map(children, callback)

-invokes a function in every child contained within its children prop, performing a transformation and returning a new element