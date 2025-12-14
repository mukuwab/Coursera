//Book Constructor Practice

//Create Book Constructor
function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    
    //After the constructor finishes, only the this.title, this.author, and this.pages exist on the object.

    let isCheckedOut;
    
    this.checkOut = function(){
        isCheckedOut = true;
    }//End checkOut
    
    this.returnBook = function(){
        isCheckedOut = false;
    }
        
    this.getStatus = function(){
       if (isCheckedOut == true){
            console.log("This book has been checked out");
        }
        else if(isCheckedOut == false){
            console.log("This book has not been checked out");
        }
    }//End getStatus
    
    this.getInfo = function(){
        
        return this.title+" | "+this.author+" | "+this.pages+".pgs";
    }


}//End function

Book1 = new Book("The Hornet's Nest", "Ella Gray", 23);

console.log(Book1.getInfo());
//Since a return statement was used in the getInfo method, you will need to print out the output gathered by the return with a console.log since the function itself does not print the returned information

Book1.checkOut(); //check out Book1
Book1.getStatus(); //check and print the status


Book2 = new Book("The Ninth Day","Cindy Walker",783);
Book2.returnBook();
//Note: if you were to not return or check the book, when calling the getInfo function the status will return as undefined
console.log("\n"+Book2.getInfo());
Book2.getStatus();

