import {customerModel} from '../models/customer-model';
import {getDb} from '../util/dbconn';

export class customer{
    constructor(){}

    saveCustomer(custData:customerModel,callback:(result:any)=>void){
        let db = getDb();
        db.collection('customer').insertOne(custData).then(result =>{
          console.log(`customer added succesfully : ${result}`);
          callback('succes');
      });
    }
}