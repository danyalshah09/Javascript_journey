console.log("Always Eager to learn javascipt");


/*Instead of doing this we can also do this
let namee ="Danyal";
let namee1 ="Sikander";
let namee2 ="Saeed";
let namee3 ="Darban";
console.log(namee + " is a good ");

console.log(namee1 + " is a good ");

console.log(namee2 + " is a good ");

console.log(namee3 + " is a good ");
*/
let namee ="Danyal";
let namee1 ="Sikander";
let namee2 ="Saeed";
let namee3 ="Darban";

// function greet(name,greettext){
//     let namee="Pushpa";//local scope only within this function

//     console.log(name+" is a good Boy");
//     console.log(greettext +" "+ name + "How are you")
// }
// let greettext= "Hey!";
// greet(namee,greettext);
// greet(namee1,greettext);
// greet(namee2,greettext);
// greet(namee3,greettext);

function sum(a,b)
{
let c=a+b;
return c;
//any statement after this will not be printed
}
let result = sum(1,2);
console.log(result); 

 