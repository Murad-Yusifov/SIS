const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcement</h1>
            <span className="text-xl text-gray-400">View All</span>
        </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#EDF9FD] rounded-md p-4">
            <div className="flex items-center justify-between ">
                <h1 className="font-medium">Lorem, ipsum dolor.</h1>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1 ">2025-01-01</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit iusto molestias.</p>
        </div>
         <div className="bg-purple-100 rounded-md p-4">
            <div className="flex items-center justify-between ">
                <h1 className="font-medium">Lorem, ipsum dolor.</h1>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1 ">2025-01-01</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit iusto molestias.</p>
        </div>
         <div className="bg-yellow-100 rounded-md p-4">
            <div className="flex items-center justify-between ">
                <h1 className="font-medium">Lorem, ipsum dolor.</h1>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1 ">2025-01-01</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugit iusto molestias.</p>
        </div>
        </div>
    </div>
  );
};

export default Announcements