import { courses, grades, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { generateId } from "../../utils.js";
import { GradeFullData } from "../../types";

export const getGradesTotal = (grades: Grade[]): number => grades.length;

export const getGradeFullData = (grade: Grade): GradeFullData => {
  const studentData = students.find(
    (student) => student.id === grade.studentId
  );
  const selectedStudenName = studentData?.name;
  const selectedStudenLastName = studentData?.lastName;

  const courseData = courses.find((course) => course.id === grade.courseId);
  const selectedCourseName = courseData?.name;

  const fullgrade = {
    grade: grade,
    studentName: selectedStudenName!,
    studentLastName: selectedStudenLastName!,
    courseName: selectedCourseName!,
  };
  return fullgrade;
};

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
export const deleteGrade = (grades: Grade[], idGrade: number): void => {
  const indexGrade = grades.findIndex((grade) => grade.id === idGrade);

  grades.splice(indexGrade, 1);
};

export const addGrade = (
  grades: Grade[],
  idStudent: number,
  idCourse: number,
  gradeValue: number
): void => {
  const isGradeExist = grades.some(
    (grade) => grade.studentId === idStudent && grade.courseId === idCourse
  );
  if (isGradeExist) {
    showErrorModal("Esta nota ya está creada");
    return;
  }
  const newGrade = {
    id: generateId(grades),
    studentId: idStudent,
    courseId: idCourse,
    value: gradeValue,
  };
  grades.push(newGrade);
};
