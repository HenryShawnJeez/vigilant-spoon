//Import Needed Utilities
import { formatDate } from "@/lib/dateUtils";
//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";
import { MdReceiptLong } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { BsInfoCircleFill } from "react-icons/bs";
 
type PackageProps = {
    packageLength : number
    packagesDelivered: number
    contactForms: number
    quotes: number
}

const Summary = ({packageLength, packagesDelivered, contactForms, quotes}: PackageProps ) => {
    //For the Date
    const currentDate = new Date()
    const formattedDate = formatDate(currentDate)
    return ( 
        <main className="">
            <div className="flex justify-end">
               <p className="text-gray-600 font-semibold">{formattedDate}.</p> 
            </div>
            <div className="flex flex-wrap justify-center mt-10 gap-5">
               <div className="w-[23%] min-w-[16rem] bg-[#4CB9E7] p-8 flex gap-x-5 rounded-md">
               <PiPackageFill className="text-white" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{packageLength}</p>
                        <p>Total Packages</p>
                    </div>
                </div>
                <div className="w-[23%] min-w-[16rem] bg-[#FB8B24] p-8 flex gap-x-5 rounded-md">
                    <BsInfoCircleFill className="text-white" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{contactForms}</p>
                        <p>Total Support</p>
                    </div>
                </div>
                <div className="w-[23%] min-w-[16rem] bg-[#65B741] p-8 flex gap-x-5 rounded-md">
                    <BsFillPatchCheckFill className="text-white" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{packagesDelivered}</p>
                        <p>Total Packages Delivered</p>
                    </div>
                </div> 
                <div className="w-[23%] min-w-[16rem] bg-red-600 p-8 flex gap-x-5 rounded-md">
                    <MdReceiptLong className="text-white" size={30}/>
                    <div className="text-white ">
                        <p className="text-2xl md:text-3xl font-bold">{quotes}</p>
                        <p>Total Requested Quotes</p>
                    </div>
                </div> 
            </div>
            
        </main>
     );
}
 
export default Summary;