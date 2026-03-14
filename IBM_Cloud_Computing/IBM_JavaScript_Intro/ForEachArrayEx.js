//ForEach Method
    //1.Iterates through arrays
    //2.Applies thr provided function to each element
    //3.Useful for performing specific actions
    //4.Doesn't create a new array
    
//Sends a welcome email to each user

function sendWelcomeEmail (email){
    console.log(`welcome email sent to ${email}`);
    //use backticks or else it won’t interpolate the variable 
}//end sendWelcomeEmail
const users = [
    //Creates an array called users containing name and email
    {name: 'Alice', email: 'alice@example.com'},
    {name: 'Bob', email: 'bob@example.com'},
    {name: 'Charlie', email: 'charlie@example.com'},
    //Note: make sure to put commas between the array elements
    
];//end array:users

users.forEach((user) => {
    //the arrow function needs parentheses around the parameter, and it must be inside the .forEach(...)
    //arrow function takes the current user object as a parameter
    //users.ForEach iterates through the array
    //Then calls the sendWelcome Email function with each iteration
    sendWelcomeEmail(user.email);
});

//About .forEach()
    //built in methid in Javascript
    //loops through every element of an array
    //users.forEach(...)-->take users array and do something for each user inside of it
    //for each is just a built in for loop. It operates like:
       // for (let i = 0; i < users.length; i++) {
            // let user = users[i];
            // sendWelcomeEmail(user.email);
        //}


//Where does 'user' come from?
    //user is just a placeholder name
    //represents the current element in the array as .forEach() loops.
    //So on each loop, user becomes:
        //1st loop: { name: 'Alice', email: 'alice@example.com' }
        //2nd loop: { name: 'Bob', email: 'bob@example.com' }
        //3rd loop: { name: 'Charlie', email: 'charlie@example.com' }
    //so user can be called anything

//The arrow function
    //is a shorthand way to write a function in Javascript
    //This does the same thing
        //users.forEach(function(user) {
            // sendWelcomeEmail(user.email);
        //});
