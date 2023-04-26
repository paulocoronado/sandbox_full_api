import { Router } from 'express';
import MedicoController from '../controllers/medicoController';

class MedicoRouter {
  router: Router;
  medicoController: MedicoController;

  constructor() {
    this.router = Router();
    this.medicoController = new MedicoController();
    this.routes();
  }

  private routes(): void {
    this.router.get('/medicos', this.medicoController.getAllUsers.bind(this.medicoController));
    // this.router.post('/', this.medicoController.createUser.bind(this.medicoController));
  }
}

export default new MedicoRouter().router;