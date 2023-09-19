import mongoose,{Schema} from "mongoose";

const projectSchema = new Schema(
    {
        title:String,
        discription:String
    },
    {
        timestamps:true,
    }
);

const Project = mongoose.model.Project || mongoose.model("Project",projectSchema);

export default Project;