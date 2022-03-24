import { Guid } from "guid-typescript";

export class organization{
    public orgName:string='';
    public gstNumber:string='';
    public industryType:string='';
    public isActive:boolean=true;

}


export class userModel extends organization{
    public userId:Guid = Guid.createEmpty();
    public firstName:string='';
    public lastName:string='';
    public address:string='';
    public phone:number=0;
    public email:string='';
    public isActive:boolean=true;
    public userRole:string[]=[];
    public userName:string='';
    public password:string='';
    public userGstNumber:string='';
    public createdBy:string='';
    public modifiedBy:string='';
    public createdDate:string='';
    public modifiedDate:string='';
}


