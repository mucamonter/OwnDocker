let tarefas = [];

const listarTarefa = (req, res) => {
    res.json(tarefas);
};

const criarTarefa = (req, res) => {
    const { descricao } = req.body;
    const novaTarefa = { id: tarefas.length + 1, descricao};
    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
};

const atualizarTarefa = (req, res) => {
    const { id } = req.params;
    const { descricao } = req.body;
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