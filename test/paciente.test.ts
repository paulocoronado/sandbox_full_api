import request from "supertest";
import App from "../src/App";

describe("GET /", () => {
  let app: App;

  beforeAll(() => {
    app = new App();
    app.listen();
  });

  afterAll(() => {
    app.close();
  });

  test("Debe retornar el listado de pacientes", async () => {
    const res = await request(app.app).get("/pacientes");
    expect(res.statusCode).toEqual(200);
    const expectedData = [{
      apellido: expect.any(String),
      cedula: expect.any(Number),
      fechaNacimiento:  expect.any(String),
      nombre: expect.any(String),
      telefono: expect.any(String)
    }];
    expect(res.body).toEqual(expectedData);
  });

  test("Debe crear un nuevo paciente", async () => {

    //Crear un número aleatorio para la cédula
    const cedula = Math.floor(Math.random() * 100000000);

    const data={
      apellido: "Coronado",
      cedula: cedula,
      fecha: "1950/01/01",
      nombre: "Paulo",
      telefono: "04141234567"
    };

    console.log(data);

    const res = await request(app.app).post("/crear_paciente").send(data);
    expect(res.statusCode).toEqual(200);

    const expectedData = {
      apellido: "Coronado",
      cedula: cedula,
      fechaNacimiento:expect.any(String),
      nombre: "Paulo",
      telefono: "04141234567"
    };
    expect(res.body).toEqual(expectedData);
  }
  );
});
