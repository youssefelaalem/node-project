import db_subject from "../models/db_subject.js";
import db_department from "../models/db_department.js";
import db_doctor_access from "../models/db_doctor_access.js";

export const index = async (req, res) => {
  const subjects = await db_subject.find({}, { name: 1 }).lean();

  res.render("add_subjects/allsubjects", {
    subjects,
    title: "all subjects",
    style: "style.css",
  });
};

export const create = async (req, res) => {
  const arr_department = await db_department.find().lean();

  res.render("add_subjects/index", { arr_department });
};

export const store = async (req, res) => {
  const { name, code, department } = req.body;
  const subject = await db_subject.create({
    name,
    code,
    department,
  });
  if (subject) {
    res.redirect("/admin/subjects");
  }
};

export const show = async (req, res) => {
  const { _id } = req.params;
  const subject_ids = await db_subject
    .findById(_id)
    .populate("department")
    .lean();
  // console.log(subject_ids);
  res.render("add_subjects/describtion_subject", { subject_ids });
};
// ////////////////////////////////////////////////
export const indexdoc = (req, res) => {
  res.render("admin/doctors_access", {
    title: "doctors_access",
    style: "doctor_access.css",
  });
};
export const storedoc = async (req, res) => {
  console.log(req.body)
  const { name, ClassRoomName } = req.body;
  const newRow = await db_doctor_access.create({
    name,
    ClassRoomName
  });
  // res.send("added")
  if (newRow) {
    res.redirect("/admin/avalid_doctor");
  }
};
export const showdoc =(req,res)=>{
  res.render('admin/doctors')
}
 