const API_URL = "http://localhost:5432/tasks";


function adicionarTarefa(){
    let Vinput = document.querySelector("input").value


    // Evita adicionar tarefas em branco
    if (Vinput.trim() === "") return;

    let Fli = document.createElement("li")
    document.querySelector("ul").appendChild(Fli)
    
    Fli.innerHTML = Vinput + '<span onclick="deletarTarefa(this)">  ❌</span>'

    document.querySelector("input").value = ""

    
}

function deletarTarefa(elementoClicado){
    // O parentElement do span ❌ é o <li> que precisamos apagar
    elementoClicado.parentElement.remove()
}