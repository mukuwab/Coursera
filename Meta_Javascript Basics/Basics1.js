console.log('hello');

/////////////////////
console.log("\n");
/////////////////////

let x = 2;
let y=6;
console.log(x+y);

/////////////////////
console.log("\n");
/////////////////////

var counter = 3;

while (counter>0){
    console.log(counter);
    counter--;
}
console.log('GO!');

/////////////////////
console.log("\n");
/////////////////////

console.log("\n2 Weeks, Day log")

for(var i = 1; i<3 ; i++){
    for(var j=1; j<=7 ; j++){
        console.log("Week",i,"Day",j);
    }
    console.log("\n")
}

/////////////////////
console.log("\n");
/////////////////////

var numbers = "12345";
console.log(numbers[0]); //index 0 of the string will hold 1
console.log(numbers[1]); //index 1 of the string will hold 2

//you can loop through the indexes using a for loop

for(var i=1; i<5; i++){
    console.log(numbers[i]);
}

/////////////////////
console.log("\n");
/////////////////////

var dogNamo = "BINGO";
for(var i=0; i<5; i++){
    console.log(dogNamo[i]);
}
console.log("And Bingo was his namoooo~");