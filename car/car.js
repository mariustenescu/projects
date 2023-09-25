const asigurare = document.querySelector(".asigurare")
const rovinieta = document.querySelector(".rovinieta")
const revizie = document.querySelector(".revizie")
const vlas = document.querySelector(".vlas")
const vlro = document.querySelector(".vlro")
const vlre = document.querySelector(".vlre")
const button = document.querySelector(".button")

var rod = document.getElementById("rod")

var cl = document.getElementById("cl")
var valAsig = document.getElementById("valAsig")
var peras = document.querySelector(".asigurare")
var rovinietaText = document.querySelector(".rovinietaText")
var reviz = document.querySelector(".reviz")
var date = new Date();
var y = date.getFullYear() ;
var m = date.getMonth() +1;
var d = date.getDate();
var currentdate =  `${y}-${m}-${d}`

document.getElementById("MyDateDisplay").innerText= currentdate;
document.getElementById("MyDateDisplay").textContent = currentdate;

button.addEventListener("click", expireAll)


function expire(){

const expiration = valAsig.value ;
const daysLeft = Math.floor((Date.parse(expiration) - Date.now()) / (24 * 60 * 60 * 1000));
peras.textContent =""
peras.textContent += "Asigurarea expira in " + (daysLeft+1) + " zile"

    if ((daysLeft+1) < 10){
        peras.style.color = " yellow"
    
    }if((daysLeft+1)<= 1){
        peras.style.color = "red"
    }if((daysLeft+1 > 10)){
        peras.style.color = "green"
    }
    
}

function expirerov(){
    const expirationRov = vlro.value ;
    const daysLeftRov = Math.floor((Date.parse(expirationRov) - Date.now()) / (24 * 60 * 60 * 1000));
rovinietaText.textContent =""
rovinietaText.textContent += "Rovinieta expira in " + (daysLeftRov+1) + " zile"

    if ((daysLeftRov+1) < 10){
        rovinietaText.style.color = " yellow"
    
    }if((daysLeftRov+1)<= 1){
        rovinietaText.style.color = "red"
    }if((daysLeftRov+1 > 10)){
        rovinietaText.style.color = "green"
    }
}

function expireRev(){
    const expirationRev = vlre.value ;
    const daysLeftRev = Math.floor((Date.parse(expirationRev) - Date.now()) / (24 * 60 * 60 * 1000));
reviz.textContent =""
reviz.textContent += "Revizia trebuie efectuata in " + (daysLeftRev+1) + " zile"

    if ((daysLeftRev+1) < 10){
        reviz.style.color = " yellow"
    
    }if((daysLeftRev+1)<= 1){
        reviz.style.color = "red"
    }if((daysLeftRev+1 > 10)){
       reviz.style.color = "green"
    }
}

function expireAll(){
    expire();
    expirerov();
    expireRev();
}


