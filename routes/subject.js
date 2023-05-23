import { Router } from "express";
import { create, index, store, show } from "../controllers/admin_methods.js";
const routersubjects = new Router();

routersubjects.get("/subjects", index);

routersubjects.get("/create_subject", create);
routersubjects.post("/subjects", store);

routersubjects.get("/subjects/:_id", show);

export default routersubjects;
