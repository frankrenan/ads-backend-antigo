import { Router } from "express";
import { ContaController } from "./controller/ContaController";
import { PerfilController } from "./controller/PerfilController";
import { ServidorController } from "./controller/ServidorController";
import { AdministradorController } from "./controller/AdministradorController";
import { ContaMiddleware } from "./middleware/ContaMiddleware";

/* MIDDLEWARES */
const contaMiddleware = new ContaMiddleware();

/* CONTROLLERS */
const contaController = new ContaController();
const perfilController = new PerfilController();
const servidorController = new ServidorController();
const administradorController = new AdministradorController();


const router = Router();


/*ROTAS CONTA */
router.post('/api/v1/conta', contaMiddleware.verificarConta, contaController.post);
router.get('/api/v1/conta', contaMiddleware.verificarConta, contaController.get);
router.post('/api/v1/authenticate', contaController.authenticate);

/*ROTAS PERFIL */
router.post('/api/v1/perfil', contaMiddleware.verificarConta, perfilController.post);
router.get('/api/v1/perfil', contaMiddleware.verificarConta, perfilController.get);

/*ROTAS SERVIDOR */
router.post('/api/v1/servidor', contaMiddleware.verificarConta, servidorController.post);
router.get('/api/v1/servidor', contaMiddleware.verificarConta, servidorController.get);

/*ROTAS ADMINISTRADOR */
router.post('/api/v1/administrador', contaMiddleware.verificarConta, administradorController.post);
router.get('/api/v1/administrador', contaMiddleware.verificarConta, administradorController.get);

export { router }