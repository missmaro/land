let sch= document.querySelector(".scholar");
let height=document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll",()=>{
let Top=document.documentElement.scrollTop;
sch.style.width=`${(Top / height )*100}%`
sch.style.background="blue"
// let sum=Top /height;
// sch.style.width=`${(sum )*100}%`




})