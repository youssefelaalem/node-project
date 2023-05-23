import { Schema, model } from "mongoose";
const db_doctor_access = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        ClassRoomName: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);
export default model("doctor_access", db_doctor_access);
