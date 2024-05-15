let buttons = document.querySelectorAll(".button")
let imput = document.querySelectorAll("input")
let reset = document.querySelector("#reset")



let string = ""
 

Array.from(buttons).forEach((elements)=>{
  elements.addEventListener("click",()=>{
   

    if(elements.innerHTML == "="){
        string = eval(string)
        string  = elements.innerHTML + string
        document.querySelector(".input").value =  string
    }

    else if(elements.innerHTML == "C"){
        string = ""
        document.querySelector(".input").value =  string

    }
    else{

        console.log(elements)
        string = string + elements.innerHTML
        // imput.value = string
        document.querySelector(".input").value  =  string


    }
  })
})

reset.addEventListener('click',()=>{
    string = ""
    document.querySelector("input").value  = string
})










