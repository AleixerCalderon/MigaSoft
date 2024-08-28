// Configuración de Swagger
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API MigaSoft',
    version: '1.0.0',
    description: 'Documentación de la API de MigaSoft, Desarrollo respaldado por los colaboradores: Diego Castillo, Giovanni Hernández, Jairo González, Andrea Muñoz, Edwin Pino, Aleixer Alvarado',
  },
  servers: [
    {
      url: 'http://localhost:3001',
    },
  ],
  components: {
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      BearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js','./src/models/*.js'], // Archivos a escanear
};

const swaggerSpec = swaggerJSDoc(options);
const setupSwagger = (app,port) => {
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Nuestro documento en formato JSON 
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });  
  console.log(`Swagger in linea: http://localhost:${port}/api`);
};

export default setupSwagger;

// {
//     "usuario": "juanperez",
//     "hashClave": "$2y$10$EjR9/i.W/JOhD9oN1xlYeec1WnO8.WA9ZPR.bZ9TPE3A.jn1fhdC2"
//   }

// {
//   "idPersona": 1,
//   "usuario": "aab",
//   "hashClave": "Migasoft"
// }

// {
// "usuario": "aab", 
// "hashClave": "Migasoft"
// }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwidXN1YXJpbyI6ImFhYiIsImlhdCI6MTcyNDc5ODI0MCwiZXhwIjoxNzI0ODAxODQwfQ.Rfm-6dp9PrIIt3VGEEKLEGJxcIpFM8qfEGhiY4jNZFA