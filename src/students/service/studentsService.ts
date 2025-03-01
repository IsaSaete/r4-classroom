import { showErrorModal } from "../../dom/index.js";
import { students } from "../../index.js";
import { Student } from "../../types.js";
import { generateId } from "../../utils.js";
import { currentStudent } from "../../types.js";

export const getStudentsTotal = (students: Student[]): number => {
  return students.length;
};

export const addStudent = (
  students: Student[],
  name: string,
  lastName: string,
  age: number,
  email: string,
  phone: string
): void => {
  const isStudentFound = students.some((student) => student.email === email);
  if (isStudentFound) {
    showErrorModal("El estudiante ya existe");
    return;
  }
  const newStudent: Student = {
    id: generateId(students),
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    phoneNumber: phone,
  };

  students.push(newStudent);
};

export const deleteStudent = (students: Student[], id: number): void => {
  const indexStudent = students.findIndex((student) => student.id === id);

  students.splice(indexStudent, 1);
};

export const getStudentsOptions = (students: Student[]): currentStudent[] => {
  const dataToSelectStudents = students.map((student) => ({
    id: student.id,
    name: student.name,
    lastName: student.lastName,
  }));
  return dataToSelectStudents;
};

export const getStudentNameById = (
  students: Student[],
  studentId: number
): string => {
  const studentData = students.find((student) => student.id === studentId)!;
  const studentName = studentData.name;
  const studentLastName = studentData.lastName;
  const completeName = `${studentName} ${studentLastName}`;

  return completeName;
};
