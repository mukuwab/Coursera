# Using the fetch function

# What is fetch?
- fetch is used to make a server request to retreive JSON data from it

# Fetch API
- set of functionalities that can be used in JavaScript to make server requests

# Single-Threaded Execution
- the next step of the fetch cannot start until the previous step has been completed

# Asynchronous Javascript
- ...

# Example
console.log('Another customer is approaching');

fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => console.log(data));

console.log('Please wait. Fetching information')

# -----

- Rather than waiting for the fetch API to return the information, the code thats after it continues to execute (the console.log).
- in the meantime the fetch API requests user data from a 3rd party web-based API 
- the fetch function is a facade function:
    > looks like its apart of JavaScript but
    instead is a way to retreive information from outside of the program
- In the example the final console log will be the one that outputs the data. even though it comes first in the code, it is delay due to the fetch and will come after the last console.log