import { Router } from 'express';
import PacienteController from '../controllers/pacienteController';

class PacienteRouter {
  router: Router;
  pacienteController: PacienteController;

  constructor() {
    this.router = Router();
    this.pacienteController = new PacienteController();
    this.routes();
  }

  private routes(): void {
    this.router.get('/pacientes', this.pacienteController.getAllUsers.bind(this.pacienteController));
    this.router.post('/crear_paciente', this.pacienteController.createUser.bind(this.pacienteController));
  }
}

export default new PacienteRouter().router;