
const totsum = document.querySelector(".totsum")
const exp = document.querySelector(".exp")
const sold = document.querySelector(".soldtotal")
const prod = document.querySelector(".prod")
const lista = document.getElementById("cump")

const button = document.querySelector(".btn")

button.addEventListener("click", equals)

   

function equals(){
    totsum.value -= exp.value
    if(inputIsValid(prod.value, exp.value)){
        lista.innerHTML += '<li class = "list-group-item">' + prod.value + " - " + exp.value + " lei"  + '</li>'
    prod.value = "";
    exp.value = ""
    sold.textContent= totsum.value
    if(sold.textContent < 0){
        sold.style.color = "red"
    }else{
        sold.style.color = "rgb(11, 219, 11)"
    }
    }
    
    
       

   }
function inputIsValid(input,input){
    if(input){
        return true;
    }
    return false;
}   

   sold.textContent= totsum.value
