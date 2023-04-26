import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

class PacienteController {

    private prisma: PrismaClient

    constructor() { 

        this.prisma = new PrismaClient()

    }

    async getAllUsers(req: Request, res: Response) {
    const users = await this.prisma.paciente.findMany();
    res.json(users);
  }

  
  async createUser(req: Request, res: Response) {

    try{
    const { 
      cedula, 
      nombre,
      apellido,
      fecha,
      telefono
    } = req.body;

    const fechaNacimiento = new Date(fecha);
    const user = await this.prisma.paciente.create({
      
      data: {
        cedula, 
        nombre,
        apellido,
        fechaNacimiento,
        telefono

      }
    });
    res.json(user);
  }catch(e:any){
    res.status(400).json({ error: e.message })
  }
  
}
}

export default PacienteController;