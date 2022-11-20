import { Schema, model } from "mongoose";

const GroupPropertySchema = new Schema({
  groupId: {
    type: Schema.Types.ObjectId,
    ref: "group",
  },
  propertyName: String,
});

const groupProperty = model("groupProperty", GroupPropertySchema);
export default groupProperty;
