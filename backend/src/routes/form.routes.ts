import { Router } from "express";
import * as controller from "../controllers/form.controler";

const formRouter = Router();

formRouter.get("/groups", controller.getAllGroups);
formRouter.get("/group/:id", controller.getGroupbyID);
formRouter.post("/createGroup", controller.createGroup);
formRouter.get("/group", controller.getGroup);

formRouter.get("/groupProperty/:id", controller.getGroupPropertybyID);
formRouter.post("/createGroupProperty", controller.createGroupProperty);
formRouter.get("/groupProperty", controller.getGroupProperty);
formRouter.get("/groupProperties", controller.getAllGroupProperty);

formRouter.get("/picture/:id", controller.getPicturebyID);
formRouter.post("/createPicture", controller.createPicture);
formRouter.get("/createPicture", controller.getPicture);
formRouter.get("/picture", controller.getAllPictures);

formRouter.get("/checkList/:id", controller.getCheckListbyID);
formRouter.post("/createCheckList", controller.createCheckList);
formRouter.get("/createCheckList", controller.getCheckList);
formRouter.get("/checkList", controller.getAllCheckLists);

formRouter.get("/", controller.createForm);

export default formRouter;
