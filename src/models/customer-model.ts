import { Guid } from "guid-typescript";

export class customerModel{
    public customerId:Guid = Guid.createEmpty();
    public userId:Guid = Guid.createEmpty();
    public custShopName:string='';
    public custShopId:number=0;
    public firstName:string='';
    public lastName:string='';
    public address:string='';
    public phone:number=0;
    public email:string='';
    public isActive:boolean=true;
    public custGstNumber:string='';
    public createdBy:string='';
    public modifiedBy:string='';
    public createdDate:string='';
    public modifiedDate:string='';
}