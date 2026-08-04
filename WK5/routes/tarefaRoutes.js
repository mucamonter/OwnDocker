import express from 'express';
import router from express.Router();
import tarefaController from '../controller/tarefaController'

router.get('/tarefas', tarefaController.listarTarefa);
router.post('/tarefas', tarefaController.criarTarefa);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', tarefaController.excluirTarefa);
module.exports = router;