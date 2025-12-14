//Make a constructor that acts as a moke bank account

function BankAccount(username,balance){
    
    this.username = username;//assigns value passed through parameter as a property of the object
    this.balance = balance;
    
    this.deposit = function deposit(amount){
        this.balance += amount; // add to balance
        
    }//End deposit
    
    this.withdraw = function withdraw(amount){
        
         if (amount <= this.balance) {
          this.balance -= amount; // subtract from balance
        } //end if
        
        else {
          console.log("Insufficient funds");
        }//end else
        
        
    }//End withdraw
    
    //function for displaying the name and balance
    this.getNameBalance = function(){
        
        return "The username of this account is "+username+" \nThe balance of this account is "+this.balance;
        
        //using this.balance is necessary to retreive the updated value, not the origional parameter
        
    }//End this.getNameBalance
    
    
        //NO RETURN
        //You don’t need return in a constructor — the new keyword automatically returns the new object.
    
}//End function
    

var newUser1 = new BankAccount("jondoe57",2000);
    //Create a new instance of the object named newUser1 stored in a var variable
    //employ the 'new' keyword along with the constructor name to create a new object
    //enter in the parameters, the new arguments: 'username' and 'balance'
console.log(newUser1.getNameBalance());
    //use the method within the construtor to display the username and account balance

newUser1.deposit(500); // adds 500 to this.balance
console.log(newUser1.getNameBalance());


newUser1.withdraw(1000); // subtracts 1000
// console.log(newUser1.BankAccount()); is not correct — you’re calling a method named BankAccount but you don’t have one. The constructor itself is not a method on the object — it created the object.
console.log(newUser1.getNameBalance());


