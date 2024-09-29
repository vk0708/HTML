// Higher order Function

function abc(val){
    console.log(val);
}
abc(function(){
    console.log("Hello");
})

//Constructor Function
function circularButton(color){
    this.radius=50;
    this.color = color;
    this.pressable = true;
}

var redbtn = new circularButton("Red");
var grnbtn = new circularButton("Green");

//iife - immediately invoked function expression

var ans = (function(){
    var privateval = 12;
    return{
        getter:function(){
            console.log(privateval);
        },
        setter:function(val){
            privateval = val;
        }
    }
})();

//******* prototype *****************
var obj = {
    name:"vaibhav",
    sname:"kale"
};  // see in console [[prototype]]

var Engineer={
    degree:"BE",
    Result:"Pass"
}

Engineer.__proto__=obj;   // see in console> in [[prototype]] obj is inherited

// ************ this, call, apply, bind

function dxa(){
    console.log(this);
}
dxa();

var obj1={
    name:"Vk",
    someMethod: function(){
        console.log(this);
    }
}

//call
function xyz(age){
    console.log(this.age);
}
var obj3={
    age:24
};
xyz.call(obj3);

//apply
function xyzw(val,val2,val3){
    console.log(this);
    console.log(this.age,val,val2,val3);
}
var obj3={
    age:24
};
xyzw.apply(obj3,[1,2,3]);

