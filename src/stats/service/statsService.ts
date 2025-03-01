import { courses, grades, students } from "../../index.js";
import { CourseStats } from "../../types";

// Crea una función para obtener las estadísticas de un curso
// La función debe recibir el id de un curso
// La función debe devolver un objeto de tipo CourseStats
export const getCourseStats = (courseId: number): CourseStats => {
  return {
    courseId: 1,
    studentsCount: students.length,
    passedCount: 3,
    passedCountPercentage: 4,
    failedCount: 5,
    failedCountPercentage: 6,
    averageGrade: 7,
    highestGrade: 1,
    highestGradeStudentId: 2,
  };
};
