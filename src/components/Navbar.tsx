import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const Navbar = async () => {
  const user = await currentUser()
  return (
    <div className='flex items-center justify-between p-4'>
      {/* Searchbar */}
      <div className="hidden lg:flex items-center gap-6 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        <Image src="/search.png" alt="" width={14} height={14}/>
        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
      {/* icons and user */}
      <div className="flex items-center gap-6 w-full justify-end">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-3 -right-3 w-5 h-5  flex items-center justify-center bg-purple-500 rounded-full text-white text-xl">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">{user?.publicMetadata.role as string}</span>
        </div>
        {/* <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" /> */}
        <UserButton/>

      </div>
      
      </div>
  );
};

export default Navbar