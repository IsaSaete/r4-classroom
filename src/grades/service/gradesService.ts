import { courses, students } from "../../index.js";
import { showErrorModal } from "../../dom/index.js";
import { Grade } from "../../types";
import { generateId } from "../../utils.js";

export const getGradesTotal = (grades: Grade[]): number => grades.length;

// Crea una función para obtener los datos completos de una nota
// La función debe recibir una nota
// La función debe devolver un objeto con las mismas propiedades de la nota
// más las propiedades studentName, studentLastName y courseName
// export const getGradeFullData

// Crea una función para eliminar una nota de la lista de notas
// La función debe recibir un array de notas y el id de la nota a eliminar
// export const deleteGrade =

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
