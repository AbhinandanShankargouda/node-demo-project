import * as express from 'express';
import {userApi} from '../api/userapi';

export class Route{
    constructor(private app:express.Express){}
    private user: userApi = new userApi();

route():void{

    this.app.post('/user/save',(req: express.Request, res:express.Response)=>{
       this.user.addUser(req,res);
    });

    this.app.get('/users',(req: express.Request, res:express.Response)=>{
        this.user.getAllUsers(req,res);
     });
}
}