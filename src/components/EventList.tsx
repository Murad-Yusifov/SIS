import prisma from "@/lib/prisma";

const EventList = ({dateParam}:{dateParam:string | undefined}) => {

    const date =dateParam? new  Date(dateParam) : new Date()

    const data = await prisma.event.findMany({
        where:{
            startTime:{
                gte: new Date(date:setHours(0,0,0,0)),
                lte: new Date(date:setHours(23,59,59,999)),

            }
        }
    })
  return data.map(event=>
                <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-blue-200 even:border-t-purple-200" key={event.id}>
                    <div className="flex items-center justify-between ">
                        <h1 className="font-semibold text-gray-600 ">{event.title}</h1>
                        <span className="text-sm text-gray-300">{event.time}</span>
                    </div>
                    <p className="mt-2 text-gray-400 text-sm">{event.description}</p>

                </div>
            )
};

export default EventList