import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row ">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Info Card */}
          <div className="bg-[#C3EBFA] py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Vince_Gilligan_by_Gage_Skidmore_3.jpg/500px-Vince_Gilligan_by_Gage_Skidmore_3.jpg"
                alt=""
                width={114}
                height={144}
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4  ">
              <h1 className="text-xl font-semibold ">Vince Gilligan</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex justify-between items-center gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                    <Image src="/blood.png" alt="" width={14} height={14} />
                <span>A+</span>
                </div>
              
              <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                <Image src="/date.png" alt="" width={14} height={14} />
                <span>January 2025</span>
              </div>
              <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                <Image src="/mail.png" alt="" width={14} height={14} />
                <span>user@gmail.com</span>
              </div>    
              <div className="w-full md:w-1/3 lg:w-full xl:w-1/3 flex items-center gap-2">
                <Image src="/phone.png" alt="" width={14} height={14} />
                <span>+994 55 555 55 55</span>
              </div>
              </div>
            </div>
          </div>
          {/* Small Card */}
          <div className=""></div>
          {/* Bottom */}
          <div className="">Schedule</div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3">r</div>
    </div>
  );
};

export default SingleTeacherPage;
