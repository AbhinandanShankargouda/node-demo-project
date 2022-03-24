import * as express from "express";
import { customerModel } from "../models/customer-model";
import { customer } from "../crud/customer";
import { Guid } from "guid-typescript";

export class customerApi {
  constructor() {}
  private Customer = new customer();


  addCustomer(req: express.Request, res: express.Response) {

    let custData: customerModel = req.body;

    if (custData != null && custData != undefined) {
      try {
        if (custData.customerId == null && custData.customerId == undefined){
          custData.customerId = Guid.create();
        }
        this.Customer.saveCustomer(custData, (data: any) => {
          res.send({
            data
          });
        });
      } catch (error) {
        res.status(500).send(error);
      }
    } else {
      res.status(500).send();
    }
  }
}
