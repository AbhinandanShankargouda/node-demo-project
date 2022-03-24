import {userModel} from '../models/user-model';
import {getDb} from '../util/dbconn';


export class user{
    constructor(){}

    manageUser(userData:userModel,callback:(result:any)=>void){
            let db = getDb();
          db.collection('user').insertOne(userData).then(result =>{
            console.log(`User added succesfully : ${result}`);
            callback('succes');
        });
    }

    fetchAllUser(callback:(result:any)=>void){
        let db = getDb();
      db.collection('user').find({}).toArray(function(err,docs){
          if (err) callback(err);
          else callback(docs);
          console.log(docs.firstName);
      });

}

fetchUserDetails(id:any,callback:(result:any)=>void){
    let db = getDb();
  db.collection('user').findOne({id},function(err,docs){
      if (err) callback(err);
      else callback(docs);
  });
}
}               