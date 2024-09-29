//*************** Master The Art: JS **********************
document.writeln("Hello, This is HTML File");

// function abcs(){
//     for(var i=0;i<10;i++){
//         console.log(i);
//     }
//     console.log(i);                 //This is scoped function where variable can access in inside the brackets
// }
// abcs();

// ***********var, const, let************
var s=10;           // visible in Window object
let q=20;
const km=1000;


// lexical environment
function abb(){
    var aa=120;
    function xyzz(){
        var bb=134;
        console.log(aa);
    }
    console.log(bb);
}
        // Parent cant access their child contains but child can acess theire parent, This records hold by lexical env

//******Copying reference values */ 
var p = [1,2,3,4,5,6];
var r = [...p];             //spread operator
r.pop();       

// Copying object
var obj = {name: "Vaibhav", std: "A"};
var copyObj = {...obj};

//************ For in Loop */
var obj ={
    name: "Vaibhav",
    age:24,
    city: "Shrirampur"
}

for(var key in obj){
    // console.log(key);
    // console.log(obj[key]);
    console.log(key, obj[key]);
}

// *******************Callback fnc **************
    // setTimeout(function(){
    //     console.log("2 Sec Baad");
    // },2000);

// **************First class fnc

function abd(d){
    d();
}
abd(function(){console.log("Hey");})

// Every array is an object 
var f = [55,77,88,99];
        // var f{
        //     0:55, 1:77
        // };
 f[-1]=22;       

 delete f[1];  //delecting index or we can delete object also using delete "a.age;"

 
