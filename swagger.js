const swaggerAutogen = require('swagger-autogen')();

const doc={
    info:{
        title:'Game Review API',
        description: 'Collects and Displays Video Game Review Information'
    },
    host:'week5-8-30xe.onrender.com/',
    schemes: ['http','https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);