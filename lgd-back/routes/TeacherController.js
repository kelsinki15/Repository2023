import  express from "express";
let router = express.Router();

import teacherService from "../services/TeacherService.js"


router.post("/addTeacher", async function (req, res){

    const userModel = {
         
        name: req.body.name,
        email:req.body.email,
        gender:req.body.gender
    }
    const teacher = await teacherService.saveTeacher(userModel);
    return res.status(200).json(teacher);
});

router.get("/getAllTeachers", async function (req, res){
    const allTeachers = await teacherService.getAllTeachers();
    return res.status(200).json(allTeachers);
});

router.get("/teacher/:id", async function (req, res){
    const teacher = await teacherService.getTeacherById(req.params.id);
    return res.status(200).json(teacher);
});

router.delete("/deleteTeacher/:id", async function (req, res){
    const teacher = await teacherService.deleteTeacherById(req.params.id);
    return res.status(200).json(teacher);
})

router.put("/updateTeacher/:id", async function(req, res){
    const userModel ={

        name: req.body.name,
        email:req.body.email,
        gender:req.body.gender
    }

    const teacher = await teacherService.updateTeacherById(req.params.id, userModel);
    return res.status(200).json(teacher);
})


export default router;