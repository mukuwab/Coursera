/*Object destructuring is a syntax in JavaScript that allows you to extract specific properties from an object and assign them to variables in a concise way. This simplifies the process of accessing and using object properties.

For example, given the following review object: 


const review = {
    title: "Great Service",
    author: "Jane Smith"
};

Instead of accessing each property individually like below:  

const author = review.author;
const title = review.title;


You can use destructuring to achieve the same result in a single line:  

const { title, author} = review; 

This extracts the author and title  properties from the review object and assigns them to variables with the same names.
*/


const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

const { author, title, timePosted } = review;



// Destructure the author, title, and timePosted properties from the review object
console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);

