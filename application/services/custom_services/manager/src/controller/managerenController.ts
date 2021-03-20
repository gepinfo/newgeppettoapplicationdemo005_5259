import { Request, Response } from 'express';
import { managerenService } from '../service/managerenService';
import { CustomLogger } from '../config/Logger'
let manageren = new managerenService();

export class managerenController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
manageren.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerenController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerenController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
manageren.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerenController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerenController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
manageren.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerenController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerenController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
manageren.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerenController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerenController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
manageren.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerenController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerenController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
manageren.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into managerenController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from managerenController.ts: GpCreate');
    })}


}