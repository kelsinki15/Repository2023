import express from "express";
let router = express.Router();


// essa é a ponto de conexão para o front-end para entender o back-end 
import userController from "./UserController.js";
import courseController from "./CourseController.js";
import teacherController from "./TeacherController.js";
import evaluationController from "./EvaluationController.js";


// teste de conexão para avisar de deu certo !
router.get("/", function(req, res){
    console.log("oi!");
    res.status(200).json({message:"oi!"});
});


router.use("/", userController);
router.use("/", courseController);
router.use("/", teacherController);
router.use("/", evaluationController);


export default router;