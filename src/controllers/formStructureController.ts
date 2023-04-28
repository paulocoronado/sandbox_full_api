import { Request, Response } from 'express';
import * as jsonSchema from '../../prisma/json-schema/json-schema.json';


type JsonSchema = Record<string, any>;

class FormStructureController {

  extractDefinition(req: Request, res: Response) {
    const { formulario } = req.params;

    const schema: JsonSchema = jsonSchema;

    if (schema.definitions && schema.definitions[formulario]) {
      res.json(schema.definitions[formulario]);
    } else {
      res.status(404).json({ error: `Definition ${formulario} not found in JSON schema.` });
    }
  }

}

export default FormStructureController;