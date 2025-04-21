const GenBut=document.getElementById("gen_buttom");
const NumVal=document.getElementById("rand-num");
GenBut.addEventListener("click",()=>{
    const rand_number=Math.floor(Math.random() * 100)+1;
    NumVal.textContent=rand_number;
});