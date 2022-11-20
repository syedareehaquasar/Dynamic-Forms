import { Schema, model } from "mongoose";

const PictureSchema = new Schema({
  groupPropertyId: {
    type: Schema.Types.ObjectId,
    ref: "groupProperty",
  },
  path: String,
});

const picture = model("picture", PictureSchema);
export default picture;
