export const formatStatus = (status: string): string => {
    const statusMapping: Record<string, string> = {
      PickedUp: 'Picked Up',
      PackageReceived: 'Package is Received',
      InTransitRoad: 'In Transit - Road',
      InFlight: 'Package In Flight',
      InShip: 'Package In Ship',
      InRail: 'Package In Rail',
      Arrived: 'Package Arrived',
      OutForDelivery: 'Package Out for Delivery',
      Delivered: 'Delivered',
    };
  
    return statusMapping[status] || status;
  };
  
  