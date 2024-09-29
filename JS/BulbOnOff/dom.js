var btn = document.querySelector("button");
var bulb = document.querySelector("#bulb");

var flag=0;

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "Yellow";
        btn.style.backgroundColor = "green";
        btn.innerHTML="On";
        console.log("Bulb is On");
        flag=1;
    }else{
        bulb.style.backgroundColor = "transparent";
        btn.style.backgroundColor = "#ff1100";
        btn.innerHTML="Off";
        console.log("Bulb is Off");
        flag=0; 
    }
});