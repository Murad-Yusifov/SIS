// import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { currentUserId, role } from "@/lib/utils";
import { Announcement, Class, Prisma } from "@prisma/client";
import Image from "next/image";


// type Announcement = {
//   id: number;
//   title: string;
//   class: string;
//   date:string;
// };

type AnnouncementList = Announcement & {class:Class}

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell ",
  },
  ...(role === "admin"? [
          {
            header: "Actions",
            accessor: "action",
          },
        ]:[]
      ) ,
];

const renderRow = (item: AnnouncementList) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-[#F1F0FF]"
  >
    <td className="flex item-center gap-4 p-4">{item.title}</td>
    <td>{item.class.name}</td>
    <td className="hidden md:table-cell">{new Intl.DateTimeFormat("az").format(item.date)}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
           {/* <FormModal  table="announcement" type="update" data={item} />
           <FormModal  table="announcement" type="delete" id={item.id} /> */}
          
          </>
        )}
      </div>
    </td>
  </tr>
);
const AnnouncementListPage = async ({
   searchParams,
}: {
  searchParams?: Record<string, string | string[]>;
}) => {
  const { page, ...queryParams } = searchParams;

  const p = typeof searchParams?.page ==="string"? parseInt(searchParams.page) : 1;

  // URL PARAMS CONDITION

  const query: Prisma.AnnouncementWhereInput = {};

if (queryParams) {
  for (const [key, value] of Object.entries(queryParams)) {
    if (value !== undefined) {
      switch (key) {
        case "search": {
          // value string | string[] ola bilər, biz string əldə edirik:
          const searchValue = Array.isArray(value) ? value[0] : value;
          query.title = { contains: searchValue, mode: "insensitive" };
          break;
        }
      }
    }
  }
}


  // ROLE CONDDITIONS
  
    const roleConditions = {
      teacher: { lessons: { some: { teacherId: currentUserId! } } },
      student: { students: { some: { id: currentUserId! } } },
      parent: { students: { some: { parentId: currentUserId! } } },
    };
  
    query.OR = [
      { classId: null },
      {
        class: roleConditions[role as keyof typeof roleConditions] || {},
      },
    ];


  const [data, count] = await prisma.$transaction([
    prisma.announcement.findMany({
      where: query,
      include: {
        class: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.announcement.count({ where: query }),
  ]);

  return (
    <div
      className="bg-white rounded-md flex-1 m-4 mt-0"
      style={{ padding: "16px", marginTop: "0" }}
    >
      {/* Top */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Announcements</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#FAE27C]">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
            //  <FormModal  table="announcement" type="create" />
            <></>
              
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <Table columns={columns} renderRow={renderRow} data={data} />

      {/* Pagination */}
      <Pagination page={p} count={count} />
    </div>
  );
};

export default AnnouncementListPage;
