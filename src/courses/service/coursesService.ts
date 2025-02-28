import { showErrorModal } from "../../dom/index.js";
import { courses } from "../../index.js";
import { Course } from "../../types";
import { generateId } from "../../utils.js";
import { CurrentCourse } from "../../types";

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

export const deleteCourse = (courses: Course[], id: number): void => {
  const indexCourse = courses.findIndex((course) => course.id === id);
  courses.splice(indexCourse, 1);
};

export const getCoursesOptions = (courses: Course[]): CurrentCourse[] => {
  const dataOfSelectCourses = courses.map((course) => ({
    id: course.id,
    name: course.name,
  }));
  return dataOfSelectCourses;
};
