import { Request, Response } from 'express';
import { usersenService } from '../service/usersenService';
import { CustomLogger } from '../config/Logger'
let usersen = new usersenService();

export class usersenController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
usersen.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersenController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersenController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
usersen.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersenController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersenController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
usersen.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersenController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersenController.ts: GpUpdate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
usersen.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersenController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersenController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
usersen.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersenController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersenController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
usersen.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersenController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersenController.ts: GpCreate');
    })}


}