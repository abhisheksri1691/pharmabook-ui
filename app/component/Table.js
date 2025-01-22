import { useState } from "react";

export default function Table() {

  const [data, setData] = useState([
    {
      id: 1,
      item: "01",
      batchNo: "01",
      rate: 78,
      quantity: 0,
      discount: 0,
      amount: 0.00
    }
  ]);


  const handleQuantChange = (id) => (event) => {
    data[id - 1].quantity = event.target.value;
  };

  const handleDisChange = (id) => (event) => {
    data[id - 1].discount = event.target.value;
  };

  const handleKeyDown = (id) => (event) => {
    if (event.key === 'Enter') {
      console.log("inside enter data size " + data.length);
      data.forEach((ele) => {
        console.log(ele)
      });

      var tdata = data[id - 1];

      tdata.amount = tdata.quantity * disCountRate;
      var disCountRate = (tdata.rate * tdata.discount) / 100
      tdata.amount = tdata.quantity * disCountRate;



      const updateData = [
        // copy the current users state
        ...data,
        // now you can add a new object to add to the array
        {
          // using the length of the array for a unique id
          id: data.length + 1,
          item: `${data.length}`,
          batchNo: `${data.length}BRD`,
          rate: 41.5,
          quantity: 2,
          discount: 20,
          amount: 0.00
        }
      ];
      setData(updateData);
    }
  };
  return (
    <div className="m-3 p-1  bg-slate-300">
      <table className="table-fixed  border-separate border border-slate-400">
        <thead className=" bg-slate-300 border-slate-400 sticky top-52">
          <tr>
            <th>S.No</th>
            <th className="border-separate border  w-full">Item</th>
            <th className="border-separate border ">Batch No</th>
            <th className="border-separate border ">Rate</th>
            <th className="border-separate border ">Quantity</th>
            <th className="border-separate border ">Disount</th>
            <th className="border-separate border ">Amount</th>
          </tr>
        </thead>
        <tbody className=" overflow-y-scroll ">
          {data.map((tableData) => {
            return (
              <tr key={tableData.id}>
                <td className="border-separate border border-slate-400 text-center">{tableData.id}</td>
                <td className="border-separate border border-slate-400"><input type="text" className="w-full p-1" name="Item"></input></td>
                <td className="border-separate border border-slate-400 p-1">BRB12345</td>
                <td className="border-separate border border-slate-400 text-center">{tableData.rate}</td>
                <td className="border-separate border border-slate-400"><input type="number" className="p-1 text-center"
                  onChange={handleQuantChange(tableData.id)} name="quantity" /></td>
                <td className="border-separate border border-slate-400"><input type="number" className="p-1 text-center"
                  onChange={handleDisChange(tableData.id)} name="discount"
                  onKeyDown={handleKeyDown(tableData.id)} ></input></td>
                <td className="border-separate border border-slate-400 text-center">{tableData.amount}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}