
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const leadenSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   leadername: String
})

const leadenModel = mongoose.model('leaden', leadenSchema, 'leaden');
export default leadenModel;
