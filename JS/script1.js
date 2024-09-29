//*************** Learn What Matters: JS **********************

console.log("Hello world");     //Hello World
var a=10;
console.log(b);     //undefined
var b=12;
//console.log(numb);     //not defined

var c=50;
const pi=3.14;
console.log(pi); 

var d=a;
var d =30;

//*************** if else elseif Statement ******************
if(a>b){
    console.log("A is bigger Number");
}
else if(b>c){
    console.log('B is bigger Number');
} 
else {
    console.log("C is bigger Number");
}
if(true){
    console.log("This is True");
}

//*************** Loops- for while ********************
for (var i = 1; i < 6; i++) {
    console.log(i);
}

while(a<41){
    console.log(a);
    a=a+10;
}

do{
    console.log(c);
    c++;
}while(c<10);

//*********** Functions************
function abc(){
    console.log("This is abc function");
}
abc();      //function call

function abc(x,y,z){
    console.log("x="+x+", Y="+y+", Z="+z);
}
abc(10,20,30);      //call by value (overloaded)

// ********* Arrays *********************
var numbs=[1,2,3,4,5,6,7];
numbs.pop();
numbs.push(8);
numbs.push(9);

for (i = 0; i < numbs.length; i++)
    document.writeln(numbs[i]);

//************* Objetcs ******************

var Bike={
    Model: "Splendor",
    Company: "Hero",
    Price: 91000,
    color: "Black n White"
};

Bike.Price= 87000;     //Updating object properties
