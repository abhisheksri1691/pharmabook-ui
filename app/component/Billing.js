import Search from "./Search";
import Table from "./Table";
import TableComponent from "./TableComponent";

export default function Billing() {
    return (
        <div>
            <h1>Billing</h1>
            <div className="mt-1 bg-white shadow-md border p-4 rounded-md flex justify-between">
                <Search></Search>
                <input
                    type="text"
                    placeholder="Enter Quantity"
                    className="px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="Enter Discount"
                    className="px-4 py-2 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button className="w-28 bg-blue-500 hover:bg-blue-700 text-white font-bold  border border-blue-700 rounded">
                    Add
                </button>
            </div>
            <div className="mt-5">

                <div className="flex lg:w-auto justify-between ">
                    <p>Invoice No: 12345</p>
                    <h1>DateTime: dfdsffsadfsfasfsfsa</h1>
                </div>
                <div className="flex lg:w-auto justify-between mt-4">
                    <div className="flex lg:w-auto" >
                        <h1>MobileNo:</h1>
                        <input type="number" className="border-2 ml-4"></input>
                    </div>
                    <h1>Patient Name : Abhishek Srivastava</h1>
                </div>
                <div className="flex lg:w-auto mt-4">
                    <h1>Bill Type : </h1>
                    <select name="languages" id="lang" className="ml-4 border-2">
                        <option value="javascript">Cash</option>
                        <option value="php">Home Delivery</option>
                        <option value="java">Online</option>
                    </select>
                </div>
            </div>
            <div className="bg-white mt-5 shadow-md border rounded-md">
            <div className="p-2">
                <table className="table-auto ">
                    <thead >
                        <tr>
                            <th className=" w-4">S.No</th>
                            <th className=" w-5/12">Item</th>
                            <th className=" w-36">Batch No</th>
                            <th className=" w-20">Expiry</th>
                            <th className=" w-20">Type</th>
                            <th className=" w-20">Pack</th>
                            <th className=" w-20">Rate</th>
                            <th className=" w-20">Quantity</th>
                            <th className=" w-20">Disount</th>
                            <th className="">Amount</th>
                        </tr>
                    </thead>
                </table>
                </div>
                <hr className="mt-2"></hr>

                <TableComponent></TableComponent>
                

            </div>
            {/* <Table></Table> */}

        </div>
    )

}