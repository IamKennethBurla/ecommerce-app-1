import { RoomCard } from 'apps/airnbnb-clone/src/app/Features';
import { useState } from 'react';

export function RoomList() {
  const [roomList, setRoomList] = useState([]);

  return (
    <div>
      <RoomCard />
    </div>
  );
}
