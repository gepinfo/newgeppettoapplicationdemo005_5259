import { Request, Response } from 'express';
import {usersenDao} from '../dao/usersenDao';
import { CustomLogger } from '../config/Logger'
let usersen = new usersenDao();

export class usersenService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersenService.ts: GpDelete')
     const  usersenId = req.params.id;
     usersen.GpDelete(usersenId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersenService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersenService.ts: GpSearch')
     const  usersenData = req.query;
     usersen.GpSearch(usersenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersenService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersenService.ts: GpUpdate')
     const  usersenData = req.body;
     usersen.GpUpdate(usersenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersenService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersenService.ts: GpSearchForUpdate')
     const  usersenData = req.body;
     usersen.GpSearchForUpdate(usersenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersenService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersenService.ts: GpGetAllValues')
     
     usersen.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersenService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersenService.ts: GpCreate')
     const  usersenData = req.body;
     usersen.GpCreate(usersenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersenService.ts: GpCreate')
         callback(response);
         });
    }


}