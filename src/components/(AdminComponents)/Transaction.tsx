"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";

//Utils
import { formatDateTime } from "@/lib/dateTimeUtils";

//Icons
import { PiPackageFill } from "react-icons/pi";



const Transaction = (orders : any) => {
    const router = useRouter()
    return ( 
        <main className="mt-10 overflow-x-auto special">
            <div className="flex justify-between w-full min-w-[40rem]">
                <p className="text-lg lg:text-xl font-bold">Ongoing Shipments</p>
                <p className="text-gray-500">Your Last 7 Shipments</p>
            </div>
            <div className="mt-10 w-full min-w-[40rem]">
            {orders.length === 0 && <div className="mt-10 w-full min-w-[40rem]"><p className="text-center text-xl font-bold">No Shipment Order Yet</p></div> }
            {orders.length !== 0 && <div className="mt-10 w-full min-w-[40rem]"> 
            {orders?.orders && orders.orders.map((order: any) => (
                    <div key={order.id} onClick={() => router.push(`/admin/orders/${order.id}`)}className="flex justify-between items-center mt-4 border-b border-gray-400 py-2 cursor-pointer">
                    <PiPackageFill className="text-orange mr-2" size={30}/>
                    <p className="w-1/4 font-semibold">{order.trackingNumber}</p>
                    <p className="w-1/4 font-semibold">{order.originPort}</p>
                    <p className="w-1/4 font-semibold">{order.destinationPort}</p>
                    <p className="w-1/4 text-green-600">{formatDateTime(order.dateCreated)}</p>
                </div>  
             ))}
            </div>
            }
            </div>
            <div className="flex justify-end my-10">
                <Link href="/admin/orders" className="p-3 bg-orange text-white rounded-md font-semibold hover:bg-orange1 duration-500">Create New Order</Link>
            </div>
        </main>
     );
}
 
export default Transaction;