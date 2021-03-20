import { Request, Response, NextFunction } from "express";
import { usersenController } from '../controller/usersenController';


export class Routes {
    private usersen: usersenController = new usersenController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/usersen/:id').delete(this.usersen.GpDelete);
app.route('/usersen/get/search').get(this.usersen.GpSearch);
app.route('/usersen').put(this.usersen.GpUpdate);
app.route('/usersen/get/update').put(this.usersen.GpSearchForUpdate);
app.route('/usersen').get(this.usersen.GpGetAllValues);
app.route('/usersen').post(this.usersen.GpCreate);
     }

}