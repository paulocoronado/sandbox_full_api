import { Router, Response, Request } from "express";
import FormStructureController from "../controllers/formStructureController";

class FormStructureRouter {
  router: Router;
  formStructureController: FormStructureController;

  constructor() {
    this.router = Router();
    this.formStructureController = new FormStructureController();
    this.routes();
  }

  private routes(): void {
    this.router.get(
      '/formulario/:formulario',
      (req: Request, res: Response) => {
        this.formStructureController.extractDefinition(req, res);
      }
    );
  }
}

export default new FormStructureRouter().router;
