import { Request, Response } from 'express';
import { projectenService } from '../service/projectenService';
import { CustomLogger } from '../config/Logger'
let projecten = new projectenService();

export class projectenController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
projecten.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectenController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectenController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
projecten.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectenController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectenController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
projecten.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectenController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectenController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
projecten.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectenController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectenController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
projecten.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectenController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectenController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
projecten.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into projectenController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from projectenController.ts: GpCreate');
    })}


}