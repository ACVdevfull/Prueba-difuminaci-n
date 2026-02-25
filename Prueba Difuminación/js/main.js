window.addEventListener("load",()=>{

//seleccionar elelemntos dom   query=consulta
let number= document.querySelector(".load_number");
let btn= document.querySelector(".load_btn");
let complete =document.querySelector(".load_complete");
let background=document.querySelector(".main_background");

//variable contadores
let percent = 1;  //porcentaje
let blur = 30;     

btn.addEventListener("click", (event) =>{
    btn.style.display = "none";

//temporizador
let inter = setInterval(()=>{

    percent ++;
blur -= 30/100

if (percent   > 100){
    clearInterval(inter);
    complete.style.display="block" 
}else{
    number.innerHTML= percent+"%";
    background.style.filter= `blur(${blur}px)`
}


},5);


})


});

//minuto 21