import { Schema, model } from "mongoose";

const GroupSchema = new Schema({
  groupName: String
});

const group = model('group', GroupSchema);
export default group;
