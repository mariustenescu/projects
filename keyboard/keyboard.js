const keyboard= document.querySelector(".btns")
const textarea= document.querySelector(".textarea")
const btns = document.querySelectorAll(".keyboard-key")
const enter = document.getElementById("enterbtn")
const ibtn = document.getElementById("1btn")
const backspace = document.getElementById("bks")
const space = document.getElementById("spacebar")

let chars =[]
 
textarea.addEventListener("click", show)
btns.forEach(btns => { btns.addEventListener("click", () =>{
    textarea.value += btns.innerText
    chars= textarea.value.split('')
    console.log(chars)
})
});

backspace.addEventListener("click", () => {
    chars.pop()
    textarea.value = chars.join('')
    
})

space.addEventListener("click", () => {
    chars.push(' ')
    textarea.value = chars.join('')
})

function show(){
    
    keyboard.classList.toggle("show-btns")
   

}

