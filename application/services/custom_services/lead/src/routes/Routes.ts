import { Request, Response, NextFunction } from "express";
import { leadenController } from '../controller/leadenController';


export class Routes {
    private leaden: leadenController = new leadenController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/leaden/:id').delete(this.leaden.GpDelete);
app.route('/leaden/get/search').get(this.leaden.GpSearch);
app.route('/leaden').put(this.leaden.GpUpdate);
app.route('/leaden/get/update').put(this.leaden.GpSearchForUpdate);
app.route('/leaden').get(this.leaden.GpGetAllValues);
app.route('/leaden').post(this.leaden.GpCreate);
     }

}