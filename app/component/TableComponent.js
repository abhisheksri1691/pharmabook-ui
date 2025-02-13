import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Print from "../print/page";    
import { Button } from "@headlessui/react";
import { useReactToPrint } from "react-to-print";

export default function TableComponent() {

  const [showOverlay, setShowOverlay] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChildUpdate = (newValue) => {
    setShowOverlay(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true); // Set loading to true
        try {
          // Simulate fetching data (replace with your actual API call)
          const response = await new Promise((resolve) => {
            setTimeout(() => {
              const mockData = [
                { id: 1, name: 'Apple' },
                { id: 2, name: 'Banana' },
                { id: 3, name: 'Orange' },
                { id: 4, name: 'Grape' },
                { id: 5, name: 'Watermelon' },
                { id: 6, name: 'Apricot' },
                { id: 7, name: 'Avocado' },
              ];
              const filteredResults = mockData.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              resolve(filteredResults);
            }, 500); // Simulate a 500ms delay
          });
  
          setSearchResults(response);
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error, e.g., display an error message
          setSearchResults([]); // Clear the search results in case of error
        } finally {
          setIsLoading(false); // Set loading to false regardless of outcome
        }
      };
  
  
      if (searchTerm) { // Only fetch if search term is not empty
        fetchData();
      } else {
        setSearchResults([]); // Clear results if search term is empty
      }
    }, [searchTerm]); // This makes the effect run whenever searchTerm changes


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
    subtotal: 0.00,
    cgst: 10.00,
    sgst: 10.00,
    roundOff: 0.00,
    grandTotal: 0.00
  });


  const handleQuantChange = (id) => (event) => {
    data[id - 1].quantity = event.target.value;
  };

  const handleDisChange = (id) => (event) => {
    data[id - 1].discount = event.target.value;
  };

  const handleKeyDown = (id) => (event) => {
    if (event.key === 'Enter' || event.key === 'Tab') {
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
      <div className={`sticky top-72  ${showOverlay ? 'blur-lg' : ''}`}>
        <div className="h-60 overflow-clip flex flex-col">
          <div className="w-full overflow-y-auto">
            <table className="table-auto  w-full   ">
              <tbody>
                {data.map((tableData) => {
                  return (
                    <tr key={tableData.id} className="border">
                      <td className="text-center w-10">{tableData.id}</td>
                      <td className="w-5/12 text-center">
                        Paracetomol 650 mg
                      </td>
                      <td className="  p-1 text-center w-36">BRB12345</td>
                      <td className="  p-1 text-center w-20">05/29</td>
                      <td className="  p-1 w-20 text-center">Tab</td>
                      <td className="  p-1 w-20 text-center">{tableData.pack}</td>
                      <td className="  text-center  w-20">{tableData.rate}</td>
                      <td className="   w-20">
                        <input type="number" className="p-1 w-full text-center"
                          onChange={handleQuantChange(tableData.id)} name="quantity" />
                      </td>
                      <td className="  w-20">
                        <input type="number" className="p-1 w-full text-center"
                          onChange={handleDisChange(tableData.id)} name="discount"
                          onKeyDown={handleKeyDown(tableData.id)} />
                      </td>
                      <td className="  text-center">{tableData.amount}</td>
                    </tr>
                    
                  )
                })}
              </tbody>
            </table>

          </div>
          {isLoading && <div className="mt-2 text-gray-500">Loading...</div>} {/* Display loading indicator */}

      {searchResults.length > 0 && (
        <ul className=" backdrop-blur-md left-0 w-full bg-white border border-gray-300 rounded-md overflow-y-auto z-10"> {/* Absolute positioning */}
          {searchResults.map((result) => (
            <li
              key={result.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setSearchTerm(result.name); // Set search term to selected result
                setSearchResults([]);       // Clear results after selection
              }}
            >
              {result.name}
            </li>
          ))}
        </ul>
      )}
        </div>


      </div>

      {/* <div className=" bg-slate-300 m-3 p-5 flex justify-between sticky bottom-1.5">

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
        <button onClick={() => handleChildUpdate(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Preview
        </button>
      </div> */}
      {showOverlay && (<Print tdata={data}></Print>)}
      {/* <div ref={contentRef}>
<Print></Print>
</div> */}
    </>
  );
}