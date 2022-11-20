import { Schema, model } from "mongoose";

const ChecklistSchema = new Schema({
  groupPropertyId: {
    type: Schema.Types.ObjectId,
    ref: "groupProperty",
  },
  checkListName: String,
});

const checkList = model("checkList", ChecklistSchema);
export default checkList;
