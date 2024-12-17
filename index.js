
const config = require('./src/configs/import')
// import 
const { port,
    hostname,
    printColoredConsole,
    conFigViewEngine,
    express,
    connectToDatabase,
    AllRouter
} = config;

const app = express();

// viewEngine  {  dotEnv, morgan, bodyParser, cors}
conFigViewEngine(app)


// router
AllRouter(app)

//Connect Database
connectToDatabase();



app.listen(port,hostname, () => {
    printColoredConsole('violet', 'Server Running ---> listening on port ' + port);
});