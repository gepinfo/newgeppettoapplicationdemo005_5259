import * as mongoose from 'mongoose';
import projectenModel from '../models/projecten';
import { CustomLogger } from '../config/Logger'


export class projectenDao {
    private projecten = projectenModel;
    constructor() { }
public GpDelete(projectenId, callback){
new CustomLogger().showLogger('info', 'Enter into projectenDao.ts: GpDelete')

this.projecten.findByIdAndRemove(projectenId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectenDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(projectenData, callback){
new CustomLogger().showLogger('info', 'Enter into projectenDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(projectenData).forEach(
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
this.projecten.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectenDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(projectenData, callback){
new CustomLogger().showLogger('info', 'Enter into projectenDao.ts: GpUpdate')

this.projecten.findOneAndUpdate({ _id: projectenData._id }, projectenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectenDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(projectenData, callback){
new CustomLogger().showLogger('info', 'Enter into projectenDao.ts: GpSearchForUpdate')

this.projecten.findOneAndUpdate({ _id: projectenData._id }, projectenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectenDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into projectenDao.ts: GpGetAllValues')

this.projecten.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectenDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(projectenData, callback){
new CustomLogger().showLogger('info', 'Enter into projectenDao.ts: GpCreate')
let temp = new projectenModel(projectenData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from projectenDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}