const spanElement=document.getElementById("span_ele");
const  ButteonElement =document.querySelector("button");
ButteonElement.onclick =function(){
    const Name=prompt("Enter your name: ");
    spanElement.textContent = Name;
}