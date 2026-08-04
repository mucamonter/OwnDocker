const API_URL = "http://localhost:3306/tasks"

function addtask(){
    if(Vinput.trim() === "") return;


    Fli.innerHTML = Vinput + '<span onclick="deletarTarefa(this)">  ❌</span>'
}



function deletarTarefa(elementoClicado){
    elementoClicado.parentElement.remove()
}
