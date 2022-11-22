import { Schema, model } from "mongoose";

const GroupSchema = new Schema({
  groupName: String,
  groupData: { type : Array , "default" : [] }
});

const group = model('group', GroupSchema);
export default group;
