
export type TableItem ={
 Teacher:string,
 Student:string,
 Parent:string,
 Subject:string,
 Class:string,
 Lesson:string,
 Exam:string,
 Assignment:string,
 Result:string,
 Event:string,
 Announcement:string,
}


const Table = ({
    columns,
    renderRow,
    data
}:{columns:{header:string,accessor:string, className?:string}[];
renderRow:(item:TableItem) =>React.ReactNode;
data:TableItem[]

}) => {
  return (
    <table className='w-full mt-4 '>
        <thead className="text-left text-gray-500 text-sm">
        <tr className="text-left text-gray-400 text-sm">
            {columns.map(col=>(
                <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
        </tr>
        </thead>
        <tbody>
            {data.map((item)=>renderRow(item))}
        </tbody>
    </table>
  );
};

export default Table