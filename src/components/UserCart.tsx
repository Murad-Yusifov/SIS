import prisma from "@/lib/prisma";
import Image from "next/image";

const UserCart = async ({type}:{type:"admin" | "teacher" | "student" | "parent"}) => {

  const modelMap: Record<typeof type,any> = {
      admin:prisma.admin,
      teacher:prisma.teacher,
      student:prisma.student,
      parent:prisma.parent,
  }
  const  data = await modelMap[type].count()

  console.log(data)
  return (
    <div className='rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C] p-4 flex-1 min-w-[130px]'>
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">2024/25</span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
        <h1 className="text-2xl font-semibold my-4">{data}</h1>
        <h2 className="text-sm capitilize font-medium text-gray-500">{type}</h2>
      </div>
  );
};

export default UserCart