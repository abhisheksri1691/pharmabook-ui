import Link from "next/link";
import { useRef, useState } from "react";
import Print from "../print/page";
import { Button } from "@headlessui/react";
import { useReactToPrint } from "react-to-print";

export default function Table() {

  const [data, setData] = useState([
    {
      id: 1,
      item: "01",
      batchNo: "01",
      rate: 78,
      quantity: 0,
      discount: 0,
      amount: 0.00,
      pack: 10
    }
  ]);
  const contentRef = useRef("");
  const reactToPrintFn = useReactToPrint({ contentRef })

  const [summaryAmount, setSummaryAmount] = useState({
    subtotal : 0.00,
    cgst : 10.00,
    sgst : 10.00,
    roundOff : 0.00,
    grandTotal : 0.00
  });


  const handleQuantChange = (id) => (event) => {
    data[id - 1].quantity = event.target.value;
  };

  const handleDisChange = (id) => (event) => {
    data[id - 1].discount = event.target.value;
  };

  const handleKeyDown = (id) => (event) => {
    if (event.key === 'Enter') {
      console.log("inside enter data size " + data.length);

      var tdata = data[id - 1];
        var amountWithoutDis = tdata.quantity * tdata.rate;

      var disCountRate = (amountWithoutDis * tdata.discount) / 100
      tdata.amount = (Number(amountWithoutDis) - Number(disCountRate)).toFixed(2);
      var sbtotal = (Number(summaryAmount.subtotal) + Number(tdata.amount)).toFixed(2);
      summaryAmount.subtotal = sbtotal;

      var grandTotalVlaue = Number(summaryAmount.subtotal + summaryAmount.cgst + summaryAmount.sgst).toFixed(2);
      summaryAmount.grandTotal = grandTotalVlaue;


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
          amount: 0.00,
          pack: 10
        }
      ];
      setData(updateData);
    }
  };
  return (
    <>
    <div ref={contentRef} className="m-3 p-1 bg-slate-300">
      <div className="h-60 overflow-clip border-separate border border-solid flex flex-col">
        <table className="table-fixed border-separate border border-slate-400">
          <thead className=" bg-slate-300 border-slate-400 sticky top-52">
            <tr>
              <th className="border-separate border w-4">S.No</th>
              <th className="border-separate border w-5/12">Item</th>
              <th className="border-separate border w-36">Batch No</th>
              <th className="border-separate border w-20">Expiry</th>
              <th className="border-separate border w-20">Type</th>
              <th className="border-separate border w-20">Pack</th>
              <th className="border-separate border w-20">Rate</th>
              <th className="border-separate border w-20">Quantity</th>
              <th className="border-separate border w-20">Disount</th>
              <th className="border-separate border">Amount</th>
            </tr>
          </thead>
        </table>
        <div className="w-full overflow-y-auto">
          <table className="table-fixed  w-full border-separate border border-slate-400">
            <tbody>
              {data.map((tableData) => {
                return (
                  <tr key={tableData.id}>
                    <td className="border-separate border border-slate-400 text-center w-10">{tableData.id}</td>
                    <td className="border-separate border border-slate-400 w-5/12">
                      <input type="text" className="p-1 w-full" name="Item" />
                    </td>
                    <td className="border-separate border border-slate-400 p-1 text-center w-36">BRB12345</td>
                    <td className="border-separate border border-slate-400 p-1 text-center w-20">05/29</td>
                    <td className="border-separate border border-slate-400 p-1 w-20 text-center">Tab</td>
                    <td className="border-separate border border-slate-400 p-1 w-20 text-center">{tableData.pack}</td>
                    <td className="border-separate border border-slate-400 text-center  w-20">{tableData.rate}</td>
                    <td className="border-separate border border-slate-400  w-20">
                      <input type="number" className="p-1 w-full text-center"
                        onChange={handleQuantChange(tableData.id)} name="quantity" />
                    </td>
                    <td className="border-separate border border-slate-400 w-20">
                      <input type="number" className="p-1 w-full text-center"
                        onChange={handleDisChange(tableData.id)} name="discount"
                        onKeyDown={handleKeyDown(tableData.id)} />
                    </td>
                    <td className="border-separate border border-slate-400 text-center">{tableData.amount}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
      </div>


    </div>

    <div className=" bg-slate-300 m-3 p-5 flex justify-between sticky bottom-16">

<label className="font-bold">Terms and Conditions</label>


<table className=" table-auto">
  <tfoot>
    <tr>
      <th className=" pl-4 pr-3  text-left   text-sm font-normal">
        Subtotal:
      </th>
      <td className=" pl-3 pr-6  text-right text-sm  sm:pr-0">{summaryAmount.subtotal}</td>
    </tr>
    <tr>
      <th className=" text-left pl-4 pr-3   text-sm font-normal">
        CGST:
      </th>
      <td className="pl-3   pr-6  text-sm text-right   sm:pr-0">{summaryAmount.cgst}</td>
    </tr>
    <tr>
      <th className=" pl-4   pr-3   text-left   text-sm font-normal  sm:table-cell">
        SGST:
      </th>
      <td className="pl-3 pr-6   text-right text-sm  sm:pr-0">{summaryAmount.sgst}</td>
    </tr>
    <tr>
      <th className=" pl-4 pr-3   text-left   text-sm font-normal  sm:table-cell">
        RoundOff:
      </th>
      <td className="pl-3 pr-6   text-right text-sm sm:pr-0">0.45</td>
    </tr>
    <tr>
      <th className="pl-4 pr-3    text-left   text-lg font-semibold  sm:table-cell">
        Grand Total:
      </th>
      <td className="pl-3 pr-6  text-right text-lg font-semibold  sm:pr-0">{summaryAmount.grandTotal}</td>
    </tr>
  </tfoot>
</table>


</div> 
<div className="w-full text-center">
<button onClick={() => reactToPrintFn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Print
</button>
</div> 
</>
  );
}