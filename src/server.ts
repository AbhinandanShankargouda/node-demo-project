import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {Route as userRoutes } from './routes/user-route';
import {Route as customerRoutes} from './routes/customer-route';
import { configuration } from './lib/appconfig';

const PORT:number = configuration.httpport;
const app = express();

function setMiddleware():void{
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({
    'limit': "50mb",
    'extended': true,
    'parameterLimit': 10000
  }));

  new userRoutes(app).route();
  new customerRoutes(app).route();
  app.use((error: Error, _req: express.Request, res:express.Response) => { 
    res.status(500).send({ error: error});
  });
}

function start(){
    setMiddleware();
    // mongoose.connect(mongoClient).then(result =>{
    //     console.log(result);
        app.listen(PORT,()=>{
            console.log(`Server is running http://localhost:${PORT}...`)
        });
    // }).catch(err=>{
    //     console.log(`Can't connect getting error:${err}`);
    // })
}

start();