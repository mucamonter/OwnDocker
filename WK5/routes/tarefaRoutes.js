const express = require('express');
const router = express.Router();
const tarefaController = require('../controller/tarefaController');

router.get('/tarefas', tarefaController.listarTarefa);
router.post('/tarefas', tarefaController.criarTarefa);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);
module.exports = router;