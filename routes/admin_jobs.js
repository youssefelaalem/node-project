import { Router } from "express";
import { storedoc, indexdoc, showdoc } from "../controllers/admin_methods.js";
const router_admin = new Router();
router_admin.get("/doctors_accessl", indexdoc);
router_admin.post("/doctors_accessl", storedoc);
router_admin.get('/avalid_doctor',showdoc)

export default router_admin;
