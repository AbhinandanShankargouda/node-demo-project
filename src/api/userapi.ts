import * as express from 'express';
import {userModel} from '../models/user-model';
import {user} from '../crud/user';

export class userApi{
    constructor(){}

    private User = new user();

    
    addUser(req: express.Request, res:express.Response){
      let userData:userModel = req.body;

      if(userData != null && userData != undefined)
      {
        try{
          this.User.manageUser(userData,(data:any)=>{
            res.send({data});
           });
        }catch(e){
          res.status(500).send({ error: e });
        }

      }else
      {
        res.status(500).send({ error: 'Incorrect data' });

      }
 
    }

    getAllUsers(_req: express.Request, res:express.Response){
      let users:userModel[]=[];
        this.User.fetchAllUser((data:any)=>{
          if(data.length > 0){
            data.forEach(element => {
              if(element) users.push(element);
            });
             res.send(users);
           }
        })
    }
}