import { showErrorModal } from "../../dom/index.js";
import { courses } from "../../index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";

export const getCoursesTotal = (courses: Course[]): number => courses.length;

export const addCourse = (courses: Course[], name: string): void => {
  const isCourseFound = courses.some((course) => course.name === name);
  if (isCourseFound) {
    showErrorModal("El curso ya existe");
    return;
  }
  const newCourse: Course = {
    id: generateId(courses),
    name: name,
  };
  courses.push(newCourse);
};

// Crea una función para eliminar un curso de la lista de cursos
// La función debe recibir un array de cursos y el id del curso a eliminar
// export const deleteCourse =

// Crea una función para obtener las opciones de cursos para rellenar un select
// La función debe recibir un array de cursos
// La función debe devolver un array de objetos con dos propiedades: id y name
// La propiedad id debe ser el id del curso
// La propiedad name debe ser el nombre del curso
// export const getCoursesOptions =
