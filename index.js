// Import json-server

const jsonServer = require("json-server");
// Create server for media player app
const MPServer = jsonServer.create();
// Create middleware used by JSOn-Server

const middleware = jsonServer.defaults();
// set up route for json file in server
const route = jsonServer.router("db.json");

// set up port for runnning server app
const PORT = 3000 || process.env.PORT;

MPServer.use(middleware);
MPServer.use(route);
MPServer.listen(PORT,()=>{
    console.log(`Media Player Server Started at port ${PORT} and waiting for client request`);
})
