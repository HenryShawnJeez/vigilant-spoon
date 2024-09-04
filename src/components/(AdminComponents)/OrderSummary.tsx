"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDateTime } from "@/lib/dateTimeUtils";

//Import Needed Icons
import { PiPackageFill } from "react-icons/pi";
//Import Needed Components
import OrderCreation from "./OrderCreation";


const OrderSummary = (orders: any) => {
  const router = useRouter();
  //Set States
  const [create, setCreate] = useState<boolean>(false);
  // Function
  const toggleCreate = () => {
    setCreate((prevCreate) => !prevCreate);
  };
  return (
    <>
      {create && <OrderCreation onClose={toggleCreate} />}
      <main className="special mt-10 overflow-x-auto">
        <div className="flex w-full min-w-[40rem] justify-between">
          <p className="text-lg font-bold lg:text-xl">Ongoing Shipments</p>
          <button onClick={toggleCreate} className="rounded-md bg-orange p-3 font-semibold text-white duration-500 hover:bg-orange1">
            Create New Order
          </button>
        </div>
        {orders.length === 0 && (
          <div className="mt-10 w-full min-w-[40rem]">
            <p className="text-center text-xl font-bold">
              No Shipment Order Yet
            </p>
          </div>
        )}
        <div className="mt-10 w-full min-w-[40rem]">
          {orders?.orders &&
            orders.orders.map((order: any) => (
              <div key={order.id} onClick={() => router.push(`/admin/orders/${order.id}`)} className="mt-4 p-2 flex cursor-pointer hover:bg-slate-100 items-center justify-between border-b border-gray-400 duration-300">
                <div className="w-1/4 flex flex-col gap-y-1">
                  <p className="text-[10px] md:text-xs text-slate-700 font-medium">Tracking Code</p>
                  <p className="font-semibold">{order.trackingNumber}</p>
                </div>
                <div className="w-1/4 flex flex-col gap-y-1">
                  <p className="text-[10px] md:text-xs text-slate-700 font-medium">Origin</p>
                  <p className="font-semibold">{order.originPort}</p>

                </div>
                <div className="w-1/4 flex flex-col gap-y-1">
                  <p className="text-[10px] md:text-xs text-slate-700 font-medium">Destination</p>
                  <p className="font-semibold">{order.destinationPort}</p>

                </div>
                <div className="w-1/4 font-medium text-green-600 flex flex-col gap-y-1">
                  <p className="text-[10px] md:text-xs text-slate-700 font-medium">Date & Time</p>
                  <p className="font-semibold">{formatDateTime(order.dateCreated)}</p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default OrderSummary;
