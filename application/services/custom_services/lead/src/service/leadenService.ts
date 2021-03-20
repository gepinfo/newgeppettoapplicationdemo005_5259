import { Request, Response } from 'express';
import {leadenDao} from '../dao/leadenDao';
import { CustomLogger } from '../config/Logger'
let leaden = new leadenDao();

export class leadenService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadenService.ts: GpDelete')
     const  leadenId = req.params.id;
     leaden.GpDelete(leadenId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadenService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadenService.ts: GpSearch')
     const  leadenData = req.query;
     leaden.GpSearch(leadenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadenService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadenService.ts: GpUpdate')
     const  leadenData = req.body;
     leaden.GpUpdate(leadenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadenService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadenService.ts: GpSearchForUpdate')
     const  leadenData = req.body;
     leaden.GpSearchForUpdate(leadenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadenService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadenService.ts: GpGetAllValues')
     
     leaden.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadenService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into leadenService.ts: GpCreate')
     const  leadenData = req.body;
     leaden.GpCreate(leadenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from leadenService.ts: GpCreate')
         callback(response);
         });
    }


}