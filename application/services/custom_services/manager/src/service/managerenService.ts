import { Request, Response } from 'express';
import {managerenDao} from '../dao/managerenDao';
import { CustomLogger } from '../config/Logger'
let manageren = new managerenDao();

export class managerenService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerenService.ts: GpDelete')
     const  managerenId = req.params.id;
     manageren.GpDelete(managerenId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerenService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerenService.ts: GpSearch')
     const  managerenData = req.query;
     manageren.GpSearch(managerenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerenService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerenService.ts: GpUpdate')
     const  managerenData = req.body;
     manageren.GpUpdate(managerenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerenService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerenService.ts: GpSearchForUpdate')
     const  managerenData = req.body;
     manageren.GpSearchForUpdate(managerenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerenService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerenService.ts: GpGetAllValues')
     
     manageren.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerenService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into managerenService.ts: GpCreate')
     const  managerenData = req.body;
     manageren.GpCreate(managerenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from managerenService.ts: GpCreate')
         callback(response);
         });
    }


}