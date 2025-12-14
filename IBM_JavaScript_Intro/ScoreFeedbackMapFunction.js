//Map Method Pratice

const examScores = [
    
    {name: "Casy Evens", score: 90},
    {name: "Gigi Miles", score: 75},
    ];
    
examScores.map((info)=>{
    console.log(`${info.name}'s score on the exam was ${info.score}.`);
    //use info.name and info.score, not score and name
});

//Or
//Method in which the map() will return a new array
    //each element is a string you build
    //you can log the new array in the console

const examMessages = examScores.map((info)=>{
    return `${info.name}'s score on the exam was ${info.score}`;
});

//now examMessages is the new array
console.log(examMessages);
