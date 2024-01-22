import mongoose, { Schema } from "mongoose";

mongoose.connect(
  "mongodb+srv://bouchekifaassem:Qw9Pkd3JSo9d4kzV@atlascluster.srbdo7a.mongodb.net/?retryWrites=true&w=majority/chat"
);
mongoose.Promise = global.Promise;

const messageSchema = new Schema({
  message: { type: String, required: true },
});

const message = mongoose.model("message", messageSchema);
export default message;
