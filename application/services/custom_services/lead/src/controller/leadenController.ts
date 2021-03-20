import { Request, Response } from 'express';
import { leadenService } from '../service/leadenService';
import { CustomLogger } from '../config/Logger'
let leaden = new leadenService();

export class leadenController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
leaden.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadenController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadenController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
leaden.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadenController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadenController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
leaden.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadenController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadenController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
leaden.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadenController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadenController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
leaden.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadenController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadenController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
leaden.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into leadenController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from leadenController.ts: GpCreate');
    })}


}