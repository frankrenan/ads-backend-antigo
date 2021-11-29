import { Router } from "express";
import { PermissoesController } from "./controller/PermissoesController";
import { UsuarioController } from "./controller/UsuarioController";
import { UsuarioPermissaoController } from "./controller/UsuarioPermissaoController";
import { ContaMiddleware } from "./middleware/ContaMiddleware";

/* MIDDLEWARES */
const contaMiddleware = new ContaMiddleware();

/* CONTROLLERS */
const permissoesController = new PermissoesController();
const usuarioController = new UsuarioController();
const usuarioPermissaoController = new UsuarioPermissaoController();

const router = Router();

/*ROTAS Permissoes */
router.post('/api/v1/permissoes', permissoesController.post);
router.get('/api/v1/permissoes', permissoesController.get);

/*ROTAS USUARIO */
router.post('/api/v1/usuario', contaMiddleware.verificarConta , usuarioController.post);
router.get('/api/v1/usuario', usuarioController.get);
router.post('/api/v1/authenticate', usuarioController.authenticate);

/*ROTAS USUARIOPERMISSAO */
router.post('/api/v1/usuario_permissao', usuarioPermissaoController.post);
router.get('/api/v1/usuario_permissao', usuarioPermissaoController.get);


export { router }