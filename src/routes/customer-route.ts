import * as express from 'express';
import {
    customerApi
} from "../api/customerapi";

export class Route {
    constructor(private app: express.Express) {}
    private customer: customerApi = new customerApi();
    route(): void {


        this.app.post('/customer/save', (req: express.Request, res: express.Response) => {
            this.customer.addCustomer(req, res);

            
        });

    }
}