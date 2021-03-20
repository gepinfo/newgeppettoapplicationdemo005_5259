import { Request, Response } from 'express';
import {projectenDao} from '../dao/projectenDao';
import { CustomLogger } from '../config/Logger'
let projecten = new projectenDao();

export class projectenService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectenService.ts: GpDelete')
     const  projectenId = req.params.id;
     projecten.GpDelete(projectenId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectenService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectenService.ts: GpSearch')
     const  projectenData = req.query;
     projecten.GpSearch(projectenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectenService.ts: GpSearch')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectenService.ts: GpUpdate')
     const  projectenData = req.body;
     projecten.GpUpdate(projectenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectenService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectenService.ts: GpSearchForUpdate')
     const  projectenData = req.body;
     projecten.GpSearchForUpdate(projectenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectenService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectenService.ts: GpGetAllValues')
     
     projecten.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectenService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into projectenService.ts: GpCreate')
     const  projectenData = req.body;
     projecten.GpCreate(projectenData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from projectenService.ts: GpCreate')
         callback(response);
         });
    }


}