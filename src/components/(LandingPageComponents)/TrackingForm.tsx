"use client"
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

//Import Needed Components
import Tracking from "./Tracking";
import getPackageWithStatusChanges from "@/app/actions/getIndividualStatus";

export default function TrackingForm() {
  const [trackingID, setTrackingID] = useState<string>("");
  const [packageDetails, setPackageDetails] = useState<any>();
  const [show, setShow] = useState<boolean>(false);
  
  //Functions
  const handleHideModal = () => {
    return setShow((prev) => !prev);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTrackingID(e.target.value);
  };


  const trackPackage = async (formData : FormData) => {

    toast.info("Fetching Your Tracking Details")
    const trackingNumber = formData.get("trackingNumber")

    try {
      if (trackingNumber) {
      const packageData = await getPackageWithStatusChanges(trackingNumber as string);
      toast.success("Your Package Tracking Details.")
      setPackageDetails(packageData);
      handleHideModal()
      }
    } catch (error) {
      toast.error("Package tracking unavailable. Please try again later.")
    }
  }
  return (
    <>
      {show && (
        <Tracking
          trackingID={trackingID}
          packageTracking={packageDetails}
          onHideModal={handleHideModal}
        />
      )}
      <div className="mx-auto w-[90%] bg-white px-2 py-8 sm:w-[80%] sm:px-4 md:w-[90%] md:px-6 lg:w-[60%] lg:px-8">
        <p className="font-bold text-orange">Tracking Details</p>
        <form className="mt-8" action={trackPackage}>
          <div className="w-full">
            <input
              required
              type="text"
              name="trackingNumber"
              onChange={handleInputChange}
              value={trackingID}
              className="peer w-full border-b border-footerBrown px-4 py-3 font-semibold focus:border-orange focus:outline-none"
            />
            <p className="relative -top-[3.5rem] text-xs font-bold duration-500 peer-focus:-top-[4rem] md:text-sm">
              Tracking Number
            </p>
          </div>
          <button type="submit" className="mt-4 w-full cursor-pointer bg-orange text-center text-white duration-500 hover:bg-blue py-3">
            Track
          </button>
        </form>
      </div>
    </>
  );
}
