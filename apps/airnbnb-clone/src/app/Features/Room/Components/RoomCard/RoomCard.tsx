import { useMemo } from 'react';
import { RoomCardDetails } from './RoomCardDetails';
import { RoomCardImageViewer } from './RoomCardImageViewer';

interface IRoomCard {
  images: string[];
  destinationName: string;
  distance: number;
  distanceUnit: string;
  price: number;
  ratings: number;
  isFavorite: boolean;
  daysOfAvailability: number;
}

export function RoomCard(props: IRoomCard) {
  const {
    images,
    destinationName,
    distance,
    distanceUnit,
    price,
    ratings,
    isFavorite,
    daysOfAvailability,
  } = props;

  const roomImages = useMemo(
    () => images.map((url: string) => ({ url, isActive: false })),
    [images]
  );

  return (
    <div className="group rounded-lg h-fit">
      <div className="rounded-[15px] relative bg-gray-500 w-full h-[300px] overflow-hidden">
        <RoomCardImageViewer images={roomImages} isFavorite={isFavorite} />
      </div>
      <RoomCardDetails
        destinationName={destinationName}
        distance={distance}
        distanceUnit={distanceUnit}
        price={price}
        ratings={ratings}
        isFavorite={isFavorite}
        daysOfAvailability={6}
      />
    </div>
  );
}
