import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from '../middlewares/multer.middleware.js';

const router = Router();

// router.route("/register").post(
//     // middlleware
//     upload.fields([
//         {
//             name:"avatar",
//             maxCount: 1
//         },
//         {
//             name: "coverImage",
//             maxCount: 1
//         }
//     ]),
//     registerUser
//     );

router.post(
    "/register",
    upload.fields([
      { name: "avatar", maxCount: 1 },
      { name: "coverImage", maxCount: 1 },
    ]),
    (req, res, next) => {
      console.log("Received files:", req.files);
      console.log("Received body:", req.body);
      next();
    },
    registerUser
);
export default router;