"use client"
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Info Card */}
          <div className="bg-[#C3EBFA] py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Vince_Gilligan_by_Gage_Skidmore_3.jpg/500px-Vince_Gilligan_by_Gage_Skidmore_3.jpg"
                alt="Vince Gilligan"
                width={114}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <div className="flex item-center gap-4">

              <h1 className="text-xl font-semibold">Vince Gilligan</h1>
              <FormModal table="teacher" type="update" data={{
                id: 1,
                username: "deanguerrero",
                email: "deanguerrero@gmail.com",
                password: "password",
                firstName: "Dean",
                lastName: "Guerrero",
                phone: "+1 234 567 89",
                address: "1234 Main St, Anytown, USA",
                bloodType: "A+",
                dateOfBirth: "2000-01-01",
                sex: "male",
                img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
              }}/>
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/blood.png" alt="Blood Type" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/date.png" alt="Date of Birth" width={14} height={14} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="Email" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="Phone" width={14} height={14} />
                  <span>+994 55 555 55 55</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-2 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt="Attendance"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-2 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt="Lessons"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-2 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt="Branches"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* Card */}
            <div className="bg-white p-4 rounded-md flex gap-2 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt="Classes"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div>
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1 className="text-lg font-semibold">Teacher&apos;s Schedule</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4 ">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shirtcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          <Link className="p-3 rounded-md bg-blue-100 " href={`/list/classes?supervisorId=${"teacher2"}`} >Teacher&apos;s Classes</Link>
          <Link className="p-3 rounded-md bg-purple-100 " href={`/list/students?teacherId=${"teacher2"}`} >Teacher&apos;s Students</Link>
          <Link className="p-3 rounded-md bg-yellow-100 " href={`/list/lessons?teacherId=${"teacher2"}`} >Teacher&apos;s Lessons</Link>
          <Link className="p-3 rounded-md bg-pink-100 " href={`/list/exams?teacherId=${"teacher2"}`} >Teacher&apos;s Exams</Link>
          <Link className="p-3 rounded-md bg-[#EDF9FD] " href={`/list/assignments?teacherId=${"teacher2"}`} >Teacher&apos;s Assignments</Link>

        </div>
      </div>
      <Performance/>
      <Announcements/>
      </div>
    </div>
  );
};

export default SingleTeacherPage;
