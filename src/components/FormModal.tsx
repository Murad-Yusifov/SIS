"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Dispatch, JSX, SetStateAction, useState } from "react";
  // import TeacherForm from "./forms/TeacherForm";
  // import StudentForm from "./forms/StudentForm";
  // import ClassForm from "./forms/ClassForm";

 const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});
// const SubjectForm = dynamic(() => import("./forms/SubjectForm"), {
//   loading: () => <h1>Loading...</h1>,
// });
// const ClassForm = dynamic(() => import("./forms/ClassForm"), {
//   loading: () => <h1>Loading...</h1>,
// });
// const ExamForm = dynamic(() => import("./forms/ExamForm"), {
//   loading: () => <h1>Loading...</h1>,
// });


const forms:{[key:string]:(setOpen: Dispatch<SetStateAction<Boolean>>, type:"create" | "update", data?:any, relatedData?:any,)=>JSX.Element}=
{
  // class:(setOpen, type, data, relatedData)=><ClassForm type={type} data={data}/>,
  teacher:(setOpen, type, data, relatedData)=><TeacherForm type={type} data={data}/>,
  student:(setOpen, type, data, relatedData)=><StudentForm type={type} data={data}/>,
  exam:(setOpen, type, data, relatedData)=><StudentForm type={type} data={data}/>,
  subject:(setOpen, type, data, relatedData)=><StudentForm type={type} data={data}/>,

}

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-[#FAE27C]"
      : type === "update"
      ? "bg-[#C3EBFA]"
      : "bg-[#CFCEFF]";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">All data will be lost. Are you sure to want to delete this item {table}?</span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-none w-max self-center">Delete</button>
      </form>
    ) :type==="create" || type ==="update"? (
       forms[table](setOpen, type, data)
    ):("Form not found")
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {open && (
        <div
          className="h-[1200px] sm: w-screen md:h-[650px] absolute left-0 top-0 bg-black z-50 flex justify-center items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-white rounded-md p-4 relative w-[90%] md:W-[70%]  lg:w-[60%] xl:w-[50%] xxl:w-[40%]">
            <Form/>
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
