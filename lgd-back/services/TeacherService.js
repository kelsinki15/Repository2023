import teacherRepository from "../repositories/TeacherRepository.js"



const saveTeacher = (teacherModel) => {
    return teacherRepository.saveTeacher(userModel);
}

const getTeacherById = (id) => {
    return teacherRepository.getTeacherById(id);
}

const getAllTeacher = () => {
    return teacherRepository.getAllTeacher();
}


const deleteTeacherById = (id) => {
    return teacherRepository.updateTeacherById(id);
}

const updateTeacherById = (id, teacherModel) => {
    return teacherRepository.updateTeacherById(id, teacherModel);
}

const service = {
    saveTeacher,
    getTeacherById,
    getAllTeacher,
    deleteTeacherById,
    updateTeacherById
}

export default service;

