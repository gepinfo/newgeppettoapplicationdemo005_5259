import { Request, Response, NextFunction } from "express";
import { projectenController } from '../controller/projectenController';


export class Routes {
    private projecten: projectenController = new projectenController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/projecten/:id').delete(this.projecten.GpDelete);
app.route('/projecten/get/search').get(this.projecten.GpSearch);
app.route('/projecten').put(this.projecten.GpUpdate);
app.route('/projecten/get/update').put(this.projecten.GpSearchForUpdate);
app.route('/projecten').get(this.projecten.GpGetAllValues);
app.route('/projecten').post(this.projecten.GpCreate);
     }

}