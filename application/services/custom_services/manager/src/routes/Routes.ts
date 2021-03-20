import { Request, Response, NextFunction } from "express";
import { managerenController } from '../controller/managerenController';


export class Routes {
    private manageren: managerenController = new managerenController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/manageren/:id').delete(this.manageren.GpDelete);
app.route('/manageren/get/search').get(this.manageren.GpSearch);
app.route('/manageren').put(this.manageren.GpUpdate);
app.route('/manageren/get/update').put(this.manageren.GpSearchForUpdate);
app.route('/manageren').get(this.manageren.GpGetAllValues);
app.route('/manageren').post(this.manageren.GpCreate);
     }

}