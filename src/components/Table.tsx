const Table = ({
    columns,
    renderRow,
    data
}:{columns:{header:string,accessor:string, className?:string}[];
renderRow:(item:{id:number,name:string,student:string[],email?:string,phone:string,address:string}) =>React.ReactNode;
data:undefined[]
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