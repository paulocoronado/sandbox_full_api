-- CreateTable
CREATE TABLE "Paciente" (
    "cedula" BIGINT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "fechaNacimiento" DATETIME NOT NULL,
    "telefono" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Medico" (
    "cedula" BIGINT NOT NULL PRIMARY KEY,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "consultorio" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "idEspecialidad" INTEGER NOT NULL,
    CONSTRAINT "Medico_idEspecialidad_fkey" FOREIGN KEY ("idEspecialidad") REFERENCES "Especialidad" ("idEspecialidad") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "idEspecialidad" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cita" (
    "idCita" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fechaHora" DATETIME NOT NULL,
    "idPaciente" BIGINT NOT NULL,
    "idMedico" BIGINT NOT NULL,
    CONSTRAINT "Cita_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Paciente" ("cedula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cita_idMedico_fkey" FOREIGN KEY ("idMedico") REFERENCES "Medico" ("cedula") ON DELETE RESTRICT ON UPDATE CASCADE
);
