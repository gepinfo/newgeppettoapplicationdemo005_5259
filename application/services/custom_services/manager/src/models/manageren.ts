
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const managerenSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   managername: String
})

const managerenModel = mongoose.model('manageren', managerenSchema, 'manageren');
export default managerenModel;
