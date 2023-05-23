import {Schema,Types,model} from "mongoose"
const subject_Schema =new Schema(
    { name:{
        type:String,
        required:true,
    },
        code:{
        type:String,
        required:false,
    },
        department:{
            type:Schema.Types.ObjectId,
            required:false,
            ref:'department'  //the name of  department's model(departmen_Schema)
        }
    },{timestamps:true}
)
export default model('subject',subject_Schema)