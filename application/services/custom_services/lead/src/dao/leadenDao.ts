import * as mongoose from 'mongoose';
import leadenModel from '../models/leaden';
import { CustomLogger } from '../config/Logger'


export class leadenDao {
    private leaden = leadenModel;
    constructor() { }
public GpDelete(leadenId, callback){
new CustomLogger().showLogger('info', 'Enter into leadenDao.ts: GpDelete')

this.leaden.findByIdAndRemove(leadenId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadenDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(leadenData, callback){
new CustomLogger().showLogger('info', 'Enter into leadenDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(leadenData).forEach(
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
this.leaden.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadenDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(leadenData, callback){
new CustomLogger().showLogger('info', 'Enter into leadenDao.ts: GpUpdate')

this.leaden.findOneAndUpdate({ _id: leadenData._id }, leadenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadenDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(leadenData, callback){
new CustomLogger().showLogger('info', 'Enter into leadenDao.ts: GpSearchForUpdate')

this.leaden.findOneAndUpdate({ _id: leadenData._id }, leadenData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadenDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into leadenDao.ts: GpGetAllValues')

this.leaden.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadenDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(leadenData, callback){
new CustomLogger().showLogger('info', 'Enter into leadenDao.ts: GpCreate')
let temp = new leadenModel(leadenData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from leadenDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}