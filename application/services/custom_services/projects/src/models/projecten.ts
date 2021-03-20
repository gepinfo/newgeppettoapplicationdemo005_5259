
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const projectenSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   projectname: String,
   technology: String,
   manager: { type: Schema.Types.String, ref: 'manageren' },
   lead: { type: Schema.Types.String, ref: 'leaden' }
})

const projectenModel = mongoose.model('projecten', projectenSchema, 'projecten');
export default projectenModel;
