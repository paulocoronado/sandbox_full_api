import swaggerJsdoc from "swagger-jsdoc";
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Ejemplo",
      version: "1.0.0",
      description: "Una API de ejemplo.",
    },
    servers: [{ url: "http://localhost:3000", description: "Servidor local" }],
  },
  apis: ["./src/index.ts", "./swagger/*.swagger.ts"],
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
