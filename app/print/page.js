"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Print() {

    const contentRef = useRef("");
      const reactToPrintFn = useReactToPrint({ contentRef });
    return (
        <div ref={contentRef}>
            <div className=" border lg:m-4 border-black">
                <div className="flex justify-between lg:p-4 sm:p-2 md:p-1">
                    <div className="lg:text-base sm:text-xs">
                        <h1 className="lg:text-green-400 sm:text-amber-800">SHIVAY MEDICAL STORE (A UNIT OF ABC)</h1>
                        <h1>SHOP NO 18 , LGF,PLOT NO 55,SUPERTECH MARKET</h1>
                        <h1>SUPERTECH ECHO VILLAGE-1, GREATER NOIDA U.P.</h1>
                        <h1>Phone no - 7777777777</h1>
                        <h1>Email ID - abhishek@gmail.com</h1>
                    </div>

                    <div>
                    <table>
                    <thead>
                    <tr>
                     <th className="text-left  lg:text-base sm:text-xs">Patient Name :-</th>
                     <td className=" lg:text-base sm:text-sm">Abhishek Srivastava</td>
                     </tr>
                     <tr>
                     <th className="text-left  lg:text-base sm:text-xs">Patient Address :-</th>
                     <td className=" lg:text-base sm:text-xs">S3A 1301 Supertech echo village -1</td>
                     </tr>
                     <tr>
                     <th className="text-left lg:text-base sm:text-xs">Mobile No:-</th>
                     <td className="lg:text-base sm:text-xs">S3A 1301 Supertech echo village -1</td>
                     </tr>
                     <tr>
                     <th className="text-left lg:text-base sm:text-xs">Dr. Name :-</th>
                     <td className="lg:text-base sm:text-xs">S3A 1301 Supertech echo village -1</td>
                     </tr>
                     <tr>
                     <th className="text-left lg:text-base sm:text-xs">Dr. Address :-</th>
                     <td className=" lg:text-base sm:text-xs">S3A 1301 Supertech echo village -1</td>
                     </tr>
                     </thead>   

                    </table>
                    </div>
                </div>

            </div>

            <div className="w-full text-center">
<button onClick={() => reactToPrintFn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Print
</button>
</div> 

        </div>
    );
}