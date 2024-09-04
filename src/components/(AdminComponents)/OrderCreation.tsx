"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

//Utils
import { makeApiRequest } from "@/lib/apiUtils";
import generateRandomNumber from "@/lib/GenerateTrackingNumber";

//Icons
import { RxCross1 } from "react-icons/rx";

const initialOrderState: OrderState = {
  trackingNumber: "",
  originPort: "",
  destinationPort: "",
  transportationMode: "",
  pieces: 0,
  length: 0,
  weight: 0,
  width: 0,
  height: 0,
  deliveryRequiredDate: "",
  estimatedDeliveryDate: "",
  dateCreated: "",
};

const OrderCreation: React.FC<OrderDetailsProps> = ({ onClose }) => {

  const router = useRouter();
  const [order, setOrder] = useState<OrderState>(initialOrderState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const trackingNumber = generateRandomNumber();
    setOrder((prevState) => ({ ...prevState, trackingNumber }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedValue = ["pieces", "length", "weight", "width", "height"].includes(name)
      ? parseFloat(value)
      : value;

    setOrder((prevState) => ({ ...prevState, [name]: updatedValue }));
  };

  const resetForm = () => setOrder(initialOrderState);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    makeApiRequest("/packages", "post", order, {
      onSuccess: () => {
        toast.success("The Package was created successfully.");
        resetForm();
        router.refresh();
        setLoading(false);
      },
      onError: (error: any) => {
        toast.error(
          error === "Missing Fields"
            ? "Please Fill In All The Details"
            : "Package Wasn't Created, Please Try Again Later"
        );
        resetForm();
        setLoading(false);
      },
    });
  };

  return (
    <main className="fixed inset-0 z-70 flex h-screen items-center justify-center bg-black bg-opacity-50">
      <div className="h-[40rem] w-80 overflow-y-scroll rounded-lg bg-bgWhite p-4 sm:w-96 md:w-[30rem] lg:w-[40rem]">
        <div className="flex justify-end">
          <RxCross1
            size={24}
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>
        <p className="mt-4 text-center text-xs font-bold sm:text-sm md:text-base">
          Fill In The Details of The New Package
        </p>
        <form className="mt-4 text-xs md:text-sm" onSubmit={handleSubmit}>
          <div className="w-full">
            <label htmlFor="trackingNumber" className="block cursor-pointer">
              Tracking Number
            </label>
            <input
              readOnly
              value={order.trackingNumber}
              type="text"
              name="trackingNumber"
              id="trackingNumber"
              className="mt-2 w-full rounded-md border border-black bg-gray-200 p-2 text-black focus:outline-orange md:p-3"
            />
          </div>
          {["originPort", "destinationPort", "transportationMode", "pieces", "weight", "length", "width", "height", "dateCreated", "estimatedDeliveryDate", "deliveryRequiredDate"].map((field, index) => (
            <div key={index} className="mt-4">
              <label htmlFor={field} className="block cursor-pointer">
                {field.split(/(?=[A-Z])/).join(" ").replace(/^\w/, (c) => c.toUpperCase())}
              </label>
              <input
                required
                value={(order as any)[field]}
                onChange={handleChange}
                type={field.includes("Date") ? "datetime-local" : field.includes("date") ? "datetime-local" : "text"}
                name={field}
                id={field}
                className="mt-2 w-full rounded-md border border-black bg-white p-2 text-black placeholder:text-xs focus:outline-orange md:p-3 md:placeholder:text-sm"
                placeholder={`Enter ${field.split(/(?=[A-Z])/).join(" ")}`}
              />
            </div>
          ))}
          <div className="mt-8 flex justify-end">
            <button
              disabled={loading}
              className="rounded-md bg-orange p-3 text-xs font-bold text-white md:text-sm"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default OrderCreation;
