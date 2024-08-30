import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);
mongoose.Promise = global.Promise;

const studentSchema = new Schema({
  name: String,
  surname: String,
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
