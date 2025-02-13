import Card from "./Card";
import Chart from "./Chart";

export default function Dashboard() {
    const data = [
        { id: 1, name: 'Total Sales', count: 'Rs 3000' },
        { id: 2, name: 'Total Order', count: '42252' },
        { id: 3, name: 'Total Users', count: '50' },
        { id: 4, name: 'Total Pending Bills', count: '5' },
    ];

    return (
        <div className="p-2">
            <h1 className="font-bold">Dashboard</h1>

            <div className="mt-10 flex justify-between">
                {data.map(ddata => {
                    return (
                        <Card key={ddata.id} name={ddata.name} count={ddata.count}></Card>
                    )
                })}





            </div>
{/* 
            <Chart> </Chart> */}

        </div>

    );

}