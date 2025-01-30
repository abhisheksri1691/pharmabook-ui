"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function Print() {

    const contentRef = useRef("");
    const reactToPrintFn = useReactToPrint({ contentRef });
    return (
        <>
            <div ref={contentRef}>
                <div className=" border lg:m-4 sm:m-4 border-black">
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
                                        <td className="lg:text-base sm:text-xs">7011972121</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left lg:text-base sm:text-xs">Dr. Name :-</th>
                                        <td className="lg:text-base sm:text-xs">CN JHA</td>
                                    </tr>
                                    <tr>
                                        <th className="text-left lg:text-base sm:text-xs">Dr. Address :-</th>
                                        <td className=" lg:text-base sm:text-xs">S3A 1301 Supertech echo village -1</td>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                    <hr className="border-black"></hr>
                    <div className="  flex justify-between sm:text-xs lg:text-base">
                        <h1>GST No : 0955412151542124111jhgfhj</h1>
                        <h1 className="font-bold  border-l border-r p-3 border-black">GST INVOICE</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th className="text-left">Invoice No :</th>
                                    <td>A0124525</td>
                                </tr>
                                <tr>
                                    <th className="text-left">Date Time :</th>
                                    <td>29-01-25 21:27</td>
                                </tr>
                            </thead>

                        </table>

                    </div>
                    <hr className="border-black"></hr>
                    <table className="table-auto border-collapse   w-full lg:text-base sm:text-xs">
                        <thead>
                            <tr>
                                <th className="border-b border-black w-5">S.No</th>
                                <th className="border-l border-b border-black">Item</th>
                                <th className="border-l border-b border-black">Pack</th>
                                <th className="border-l border-b border-black">HSN</th>
                                <th className="border-l border-b border-black">Batch</th>
                                <th className="border-l border-b border-black">Exp</th>
                                <th className="border-l border-b border-black">Quantity</th>
                                <th className="border-l border-b border-black">MRP</th>
                                <th className="border-l border-b border-black">Discount</th>
                                <th className="border-l border-b border-black">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <td>1</td>
                                <td className="border-l border-black">Paracitomol fsfffsdfsffsa</td>
                                <td className="border-l border-black">1 pack</td>
                                <td className="border-l border-black">300480</td>
                                <td className="border-l border-black">JHHJHJHJ</td>
                                <td className="border-l border-black">01/28</td>
                                <td className="border-l border-black">1</td>
                                <td className="border-l border-black">100</td>
                                <td className="border-l border-black">10.00</td>
                                <td className="border-l border-black">10.00</td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td className="border-l border-black">Paracitomol</td>
                                <td className="border-l border-black">1 pack</td>
                                <td className="border-l border-black">300480</td>
                                <td className="border-l border-black">JHHJHJHJ</td>
                                <td className="border-l border-black">01/28</td>
                                <td className="border-l border-black">1</td>
                                <td className="border-l border-black">100</td>
                                <td className="border-l border-black">10.00</td>
                                <td className="border-l border-black">10.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr className="border-black"/>
                    <div className=" flex justify-between px-2">
                        <div>
                            <h3 className="font-semibold lg:text-base sm:text-xs">Terms and Conditions</h3>
                            <ul className="list-disc pl-6 sm:text-xs lg:text-sm">
                                <li>Goods once sold will not be taken back or exchanged.</li>
                                <li>Prices are subject to change without prior notice.</li>
                                <li>Any disputes are subject to [Your City/Region] jurisdiction.</li>
                                <li>Payment must be made within [Number] days.</li>
                            </ul>
                            <p className="font-semibold mt-5 lg:text-base sm:text-xs">Amount in Words: <span id="amount-in-words">Seventy Three Rupees and Fifty Paise Only</span></p>
                        </div>
                        <div className=" border-l-2 border-slate-700 p-2">
                            <p className="font-semibold lg:text-base sm:text-xs">Subtotal: <span id="subtotal">70.00</span></p>
                            <p className="font-semibold lg:text-base sm:text-xs">Tax (5%): <span id="tax">3.50</span></p>
                            <p className="font-semibold lg:text-base sm:text-xs">Discount (5%): <span id="tax">3.50</span></p>
                            <p className=" font-bold mt-5 lg:text-xl sm:text-base">Total: <span id="total">73.50</span></p>

                        </div>
                    </div>
                    <hr className="border-black"/>
                    <div className="text-center text-gray-600 text-sm">
                        <p>Thank you for your purchase!</p>
                        <p>* This is a computer-generated invoice.</p>
                    </div>

                </div>
            </div>
            <div className="w-full text-center">
                <button onClick={() => reactToPrintFn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Print
                </button>
            </div>
        </>
    );
}