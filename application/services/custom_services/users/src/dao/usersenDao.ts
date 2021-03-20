import * as mongoose from 'mongoose';
import usersenModel from '../models/usersen';
import { CustomLogger } from '../config/Logger'


export class usersenDao {
    private usersen = usersenModel;
    constructor() { }
public GpDelete(usersenId, callback){
new CustomLogger().showLogger('info', 'Enter into usersenDao.ts: GpDelete')

this.usersen.findByIdAndRemove(usersenId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersenDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(usersenData, callback){
new CustomLogger().showLogger('info', 'Enter into usersenDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(usersenData).forEach(
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
this.usersen.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersenDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(usersenData, callback){
new CustomLogger().showLogger('info', 'Enter into usersenDao.ts: GpUpdate')

this.usersen.findOneAndUpdate({ _id: usersenData._id }, usersenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersenDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(usersenData, callback){
new CustomLogger().showLogger('info', 'Enter into usersenDao.ts: GpSearchForUpdate')

this.usersen.findOneAndUpdate({ _id: usersenData._id }, usersenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersenDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into usersenDao.ts: GpGetAllValues')

this.usersen.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersenDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(usersenData, callback){
new CustomLogger().showLogger('info', 'Enter into usersenDao.ts: GpCreate')
let temp = new usersenModel(usersenData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersenDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}