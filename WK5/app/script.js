// CÓDIGO DO FRONTEND (script.js)
const formulario = document.querySelector("#formulario");
const inputElement = document.querySelector("#task-input");
const listaUl = document.querySelector("#lista-tarefas");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault(); // Impede a página de recarregar

    const nomeTarefa = inputElement.value.trim();
    if (!nomeTarefa) return alert("Digite uma tarefa!");

    try {
        // Envia o dado para o seu servidor Node.js (Backend)
        const resposta = await fetch("http://localhost:3000/tarefas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: nomeTarefa })
        });

        if (!resposta.ok) throw new Error("Erro no servidor");

        const novaTarefa = await resposta.json();

        // Cria o elemento na tela com o retorno do banco
        let Fli = document.createElement("li");
        let Tdone = novaTarefa.done === 0 ? "Undone" : "Done";

        Fli.innerHTML = `${novaTarefa.name} <button onclick="alternarStatus(${novaTarefa.id})">${Tdone}</button>`;
        listaUl.appendChild(Fli);
        
        inputElement.value = ""; // Limpa o input

    } catch (erro) {
        console.error(erro);
        alert("Não foi possível salvar a tarefa no banco.");
    }
});
