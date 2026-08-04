import db from '../con';

let tarefas = [];
let Vinput = document.querySelector("input").value;
let done = 0;

const listarTarefa = (req, res) => {
    res.json(tarefas);
};

function toogleDone(){
    if (done === 0){
        done = 1;
    } else{
        done = 0;
    }
}
    console.log("Done está ", done);

const criarTarefaNoBanco = async (req, res) =>{
    try{
        const { name } = req.body;
        const done = 0;
        const query = "INSERT INTO tasks (name, done) VALUES (?, ?)";
        const [resultado] = await db.query(query, [name, done]);
        return res.status(201).json({
            id: resultado.insertId,
            name: name,
            done: done
        });

    } catch (erro){
        console.error(erro);
        return res.status(500).json({mensagem: "erro interno do servidor."});
    }
    
};

const criarTabelaNaTela = async () => {
    const inputElement = document.querySelector("input");
    const nomeTarefa = inputElement.value;

    if (!nomeTarefa) return alert("Digite o nome da tarefa!")
    
    try{
        const resposta = await fetch("http://localhost:3000/task", {
            method: "POST",
            headers: { "Content-Type": "aplication/json" },
            body: JSON.stringify({ name: nomeTarefa})
        });

        if (!resposta.ok) throw new Error("Erro ao salvar a tarefa no servidor")
            
            const novaTarefa = await resposta.json();
            const listUl = document.querySelector("ul");
            let Fli = document.createElement("li");
            let Tdone = novaTarefa.done === 0 ? "Undone" : "Done";
            
            Fli.innerHTML = `${novaTarefa.name} <button onclick="toogleDone(${novaTarefa.id})">${Tdone}</button>`;
            listUl.appendChild(Fli);
            inputElement.value = "";
    } catch (erro) {
        console.log(erro);
        alert("Não é possível salvar a tarefa");
    }

    const formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", async (event) => {
        event.preventDefault();
        await criarTabelaNaTela();
    })
};

const atualizarTarefa = (req, res) => {
    const { id } = req.params;
    
    const index = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));
    if (index !== -1) { 
        tarefas[index].descricao = descricao;
        res.json(tarefas[index]);
    } else{
        res.status(404).json({ mensagem: 'Tarefa não encontrada'});
    }
};

const excluirTarefa = (req, res) => {
    const { id } = req.params;
    const index = tarefas.findIndex(tarefa => tarefa.id === parseInt(id));
    if (index !== -1) {
        tarefas.splice(index, 1);
        res.json({ mensagem: 'Tarefa excluída com sucesso'});
    } else{
        res.status(404).json({ mensagem:'Tarefa não encontrada' });
    }
};

module.exports= { listarTarefa, criarTarefa, atualizarTarefa, excluirTarefa};