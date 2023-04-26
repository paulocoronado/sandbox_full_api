import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

class MedicoController {

    private prisma: PrismaClient

    constructor() { 

        this.prisma = new PrismaClient()

    }

    async getAllUsers(req: Request, res: Response) {
    const users = await this.prisma.medico.findMany();
    res.json(users);
  }

  /*
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = await this.prisma.medico.create({
      data: {
        name,
        email,

      }
    });
    res.json(user);
  }
  */
}

export default MedicoController;