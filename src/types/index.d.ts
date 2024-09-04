//Package creation
declare type OrderState = {
  trackingNumber: string;
  originPort: string;
  destinationPort: string;
  transportationMode: string;
  pieces: number;
  length: number;
  weight: number;
  width: number;
  height: number;
  deliveryRequiredDate: string;
  estimatedDeliveryDate: string;
  dateCreated: string;
};

declare type OrderDetailsProps = {
  onClose: () => void;
};

//For the package and status updates
declare type InitialStateProps = {
  packageID: string;
  statusChanges: string;
  location: string;
  timestamp: string,
};

declare type StatusItem = {
  id: string;
  status: string;
  location: string;
  timestamp: string;
  editing: boolean;
};

