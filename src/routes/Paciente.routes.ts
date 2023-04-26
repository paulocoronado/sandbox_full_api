import { Router, Request, Response } from 'express';
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
    this.router.get('/pacientes', (req: Request, res: Response) => {
      this.pacienteController.getAllPatients(req, res);
    });
    this.router.post('/crear_paciente', this.pacienteController.createUser.bind(this.pacienteController));
  }
}

export default new PacienteRouter().router;