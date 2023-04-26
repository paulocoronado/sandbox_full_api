/*
  Warnings:

  - The primary key for the `Paciente` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cedula` on the `Paciente` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Medico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `cedula` on the `Medico` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `idMedico` on the `Cita` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `idPaciente` on the `Cita` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paciente" (
    "cedula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "telefono" TEXT NOT NULL
);
INSERT INTO "new_Paciente" ("apellido", "cedula", "fechaNacimiento", "nombre", "telefono") SELECT "apellido", "cedula", "fechaNacimiento", "nombre", "telefono" FROM "Paciente";
DROP TABLE "Paciente";
ALTER TABLE "new_Paciente" RENAME TO "Paciente";
CREATE TABLE "new_Medico" (
    "cedula" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "idEspecialidad" INTEGER NOT NULL,
    CONSTRAINT "Medico_idEspecialidad_fkey" FOREIGN KEY ("idEspecialidad") REFERENCES "Especialidad" ("idEspecialidad") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Medico" ("apellido", "cedula", "consultorio", "correo", "idEspecialidad", "nombre") SELECT "apellido", "cedula", "consultorio", "correo", "idEspecialidad", "nombre" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
CREATE TABLE "new_Cita" (
    "idCita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaHora" DATETIME NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "idMedico" INTEGER NOT NULL,
    CONSTRAINT "Cita_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente" ("cedula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cita_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico" ("cedula") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Cita" ("fechaHora", "idCita", "idMedico", "idPaciente") SELECT "fechaHora", "idCita", "idMedico", "idPaciente" FROM "Cita";
DROP TABLE "Cita";
ALTER TABLE "new_Cita" RENAME TO "Cita";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
