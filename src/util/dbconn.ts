import * as mongodb from 'mongodb';
import { configuration } from '../lib/appconfig';

const mongoClient = configuration.mongoclient;
const MongoClient = mongodb.MongoClient;
var db;
mongoConnect();


function mongoConnect (){
    MongoClient.connect(mongoClient,{ useUnifiedTopology: true,useNewUrlParser: true })
    .then(client =>{
      console.log('connected');
      db = client.db('test');
    })
    .catch(err=>{
      console.log(err);
      throw err;
    });
}

export function getDb (){
    if(db){
        console.log(mongoConnect);
        return db
    }
    else{
        throw 'No database found'
    }
};



