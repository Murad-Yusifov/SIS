import Announcements from "@/components/Announcements";
import AttendanceChartContainer from "@/components/AttendanceChartContainer";
import CountChartContainer from "@/components/CountChartContainer";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCart from "@/components/UserCart";

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8 ">
      {/* User Cart */}
      <div className="flex gap-4 justify-between flex-wrap">
      <UserCart type="admin" />
      <UserCart type="teacher" />
      <UserCart type="student" />
      <UserCart type="parent" />
      </div>
      {/* Middle chart */}
      <div className="flex flex-col gap-4  lg:flex-row">
        {/* Count chart */}
        <div className="w-full lg:w-1/3 h-[400px]">
        <CountChartContainer/>
        </div>
         {/* Attendance chart */}
        <div className="w-full lg:w-2/3 h-[400px] ">
        {/* <AttendanceChartContainer /> */}
        <AttendanceChartContainer/>
        </div>
      </div>
      {/* Bottom charts */}
      <div className="w-full h-[500px]">
        <FinanceChart/>  
      </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar />
      <Announcements/>
      </div>
    </div>
  );
};

export default AdminPage