const API_URL = "http://localhost:3306/tasks"

function addTask(){
    let Vinput = document.querySelector("input").value

    if(Vinput.trim() === "") return;

    let Fli = document.createElement("li")
    document.querySelector("ul").appendChild(Fli)

    Fli.innerHTML = Vinput + '<span onclick="deletarTarefa(this)">  ❌</span>'

    document.querySelector("input").value = ""
}



function deletarTarefa(elementoClicado){
    elementoClicado.parentElement.remove()
}
