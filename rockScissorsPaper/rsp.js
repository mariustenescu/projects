var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var text = document.getElementById("text")
var listofsimb = [rock, scissors, paper]
var cch = document.getElementById("cch")


rock.addEventListener("click", game)
paper.addEventListener("click", game1)
scissors.addEventListener("click", game2)

function game(){
    var compchoice = listofsimb[Math.floor(Math.random()*listofsimb.length)]
    cch.innerHTML = ""
    text.innerHTML = ""
    cch.innerHTML += "Computer's choice: " + compchoice.id
    
    
    if(rock != compchoice && compchoice != paper){
        console.log("you win")
        
        
        text.innerHTML += "You win!"
        text.style.color = "green"
    }else if(rock != compchoice && compchoice == paper){
        text.innerHTML += "You lose!"
        text.style.color = "red"
    }else{
        text.innerHTML += "Draw"
        text.style.color ="rgba(107, 12, 92, 0.953)"
    }}
    function game1(){
        var compchoice = listofsimb[Math.floor(Math.random()*listofsimb.length)]
        cch.innerHTML = ""
        text.innerHTML = ""
        cch.innerHTML += "Computer's choice: " + compchoice.id
    if(paper != compchoice && compchoice != scissors){
        text.innerHTML += "You win!"
        text.style.color = "green"
    }else if(paper != compchoice && compchoice == scissors){
        text.innerHTML += "You lose!"
        text.style.color = "red"
    }else{
        text.innerHTML += "Draw"
        text.style.color ="rgba(107, 12, 92, 0.953)"
    }
    }
    function game2(){
        var compchoice = listofsimb[Math.floor(Math.random()*listofsimb.length)]
        cch.innerHTML = ""
        text.innerHTML = ""
        cch.innerHTML += "Computer's choice: " + compchoice.id
    if(scissors != compchoice && compchoice != rock){
        text.innerHTML += "You win!"
        text.style.color = "green"
    }else if(scissors != compchoice && compchoice ==rock ){
        text.innerHTML += "You lose!"
        text.style.color = "red"
    }else{
        text.innerHTML += "Draw"
        text.style.color ="rgba(107, 12, 92, 0.953)"}
    }
    