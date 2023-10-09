const swaggerAutogen = require('swagger-autogen')();

const doc={
    info:{
        title:'Game Review API',
        description: 'Collects and Displays Video Game Review Information'
    },
    host:'localhost:8000',
    schemes: ['http','https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);