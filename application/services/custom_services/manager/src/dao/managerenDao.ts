import * as mongoose from 'mongoose';
import managerenModel from '../models/manageren';
import { CustomLogger } from '../config/Logger'


export class managerenDao {
    private manageren = managerenModel;
    constructor() { }
public GpDelete(managerenId, callback){
new CustomLogger().showLogger('info', 'Enter into managerenDao.ts: GpDelete')

this.manageren.findByIdAndRemove(managerenId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerenDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(managerenData, callback){
new CustomLogger().showLogger('info', 'Enter into managerenDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(managerenData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.manageren.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerenDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(managerenData, callback){
new CustomLogger().showLogger('info', 'Enter into managerenDao.ts: GpUpdate')

this.manageren.findOneAndUpdate({ _id: managerenData._id }, managerenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerenDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(managerenData, callback){
new CustomLogger().showLogger('info', 'Enter into managerenDao.ts: GpSearchForUpdate')

this.manageren.findOneAndUpdate({ _id: managerenData._id }, managerenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerenDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into managerenDao.ts: GpGetAllValues')

this.manageren.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerenDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(managerenData, callback){
new CustomLogger().showLogger('info', 'Enter into managerenDao.ts: GpCreate')
let temp = new managerenModel(managerenData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from managerenDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}