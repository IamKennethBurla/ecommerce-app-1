import { RoomCard } from 'apps/airnbnb-clone/src/app/Features/Room';
import { useState } from 'react';
import { IRoomDetails } from '../../Interfaces/RoomDetails';
import sampleData from './sampleData';

export function RoomList() {
  const [roomList, setRoomList] = useState<IRoomDetails[]>(sampleData);

  return (
    <div className="grid custom-sm:grid-cols-1 custom-md:grid-cols-2 custom-lg:grid-cols-3 gap-x-6 gap-y-10">
      {roomList.map((room: IRoomDetails) => (
        <div>
          <RoomCard
            images={room.images.map(({ url }) => url)}
            destinationName={room.destinationInfo.name}
            distance={room.destinationInfo.distance}
            distanceUnit={room.destinationInfo.unit}
            price={room.roomInfo.price}
            ratings={room.ratings}
            isFavorite={room.isFavorite}
            daysOfAvailability={6}
          />
        </div>
      ))}
    </div>
  );
}
