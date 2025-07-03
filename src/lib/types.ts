// types.ts
import {
  Teacher,
  Student,
  Class,
  Subject,
  Exam,
  // ... digər modellər
} from "@prisma/client";

export type FormData =
  | Teacher
  | Student
  | Class
  | Subject
  | Exam
  // | Parent | Lesson | Assignment | Result | Attendance | Event | Announcement
  ;

export type RelatedData = {
  [key: string]: unknown;
};
