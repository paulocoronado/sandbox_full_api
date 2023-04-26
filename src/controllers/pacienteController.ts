import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

class PacienteController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllPatients(req: Request, res: Response): Promise<void> {
    try {
      const patients = await this.prisma.paciente.findMany();
      res.status(200).json(patients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await this.prisma.$disconnect();
    }
  }

  async createUser(req: Request, res: Response) {

    try {
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
    } catch (e: any) {
      res.status(400).json({ error: e.message })
    }

  }
}

export default PacienteController;