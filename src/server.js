const server = require('./app');


const PORT = process.env.PORT;

server.listen(PORT , () => {
    console.log('Server Runnig in '+ PORT);
});