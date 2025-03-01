export type Grade = {
  id: number;
  studentId: number;
  courseId: number;
  value: number;
};

export type Course = {
  id: number;
  name: string;
};

export type Student = {
  id: number;
  name: string;
  lastName: string;
  age: number;
  email: string;
  phoneNumber: string;
};

export type CourseStats = {
  courseId: number;
  studentsCount: number;
  passedCount: number;
  passedCountPercentage: number;
  failedCount: number;
  failedCountPercentage: number;
  averageGrade: number;
  highestGrade: number;
  highestGradeStudentId: number;
};

export type currentStudent = {
  id: number;
  name: string;
  lastName: string;
};

export type CurrentCourse = {
  id: number;
  name: string;
};
export type GradeFullData = {
  grade: Grade;
  studentName: string;
  studentLastName: string;
  courseName: string;
};
