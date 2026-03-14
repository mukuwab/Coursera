# Always capitalize component names
- ex: Heading.js
- react treats lowercase components as regular html elements
- capitalizing a component name helps react to distinguish jsx elements from html elements

# function name must always be declared using a capital letter for the first letter

function Heading() {
    let title = "This is some heading text";
    
    return(
        <h1>{title}</h1>
    );
    
};


# Transpiling
-converting jsx to html



# Creating React Components
-go to compiler

    > cd <insert file path>

    > npm init react-app

    > npm start

-this will build the react app named react-app in the file directory that is selected


THIS DIDNT WORK

try:

    > npx create-react-app your-first-component
