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

const Project = mongoose.models.Projects || mongoose.model("Projects",projectSchema);

export default Project;