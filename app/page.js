"use client";
import Image from "next/image";
import AlertDialog from "./component/AlertDialog";
import Table from "./component/Table";


export default function Home() {

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.length == 10) {
        console.log("API is calling")
      }
    }
  };
  return (
    <div>
      <header className="sticky top-0 z-50">
        <nav className="flex items-center  bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span className="font-semibold text-xl tracking-tight">PharmaBook</span>
          </div>
          <div className="absolute right-10 block lg:flex lg:w-auto">
            <div className="text-sm">
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-5">
                Stock
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold mr-5">
                Billing
              </a>
              <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-bold">
                Reports
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="bg-slate-300 m-3 p-3 border-2 sticky top-20">
        {/* <AlertDialog/> */}
        <div className="flex lg:w-auto justify-between ">
          <h1 className="font-bold">Invoice No: 12345</h1>
          <h1 className="font-bold">DateTime: dfdsffsadfsfasfsfsa</h1>
        </div>
        <div className="flex lg:w-auto justify-between mt-4">
          <div className="flex lg:w-auto" >
            <h1 className="font-bold">MobileNo:</h1>
            <input type="number" className="border-2 ml-4" onKeyDown={handleKeyDown}></input>
          </div>
          <h1 className="font-bold">Patient Name : Abhishek Srivastava</h1>
        </div>
        <div className="flex lg:w-auto mt-4">
          <h1 className="font-bold">Bill Type : </h1>
          <select name="languages" id="lang" className="ml-4 border-2">
            <option value="javascript">Cash</option>
            <option value="php">Home Delivery</option>
            <option value="java">Online</option>
          </select>
        </div>

      </div>
      <Table></Table>
      


      {/* <footer>I am footer</footer> */}
    </div>
  );
}
