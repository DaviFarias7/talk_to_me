'use client';
import { useState } from 'react';
import Button from './Button';
import { Create } from './Create';
import { Input } from './Input';
import { Join } from './Join';

export function FormWrapper() {
  const [selectedRoom, setSelectedRoom] = useState<'join' | 'create'>('join');
  console.log('FormWrapper e selectedRoom', selectedRoom);
  const handeSelectedRoom = (room: 'join' | 'create') => {
    setSelectedRoom(room);
  };
  return (
    <div className="w-full">
      <div className="flex items-center text-center">
        <span
          className={`w-1/2 p-4 cursor-pointer ${
            selectedRoom === 'join' && 'rounded-t-lg text-primary bg-secondary'
          }`}
          onClick={() => handeSelectedRoom('join')}
        >
          Igressar
        </span>
        <span
          className={`w-1/2 p-4 cursor-pointer ${
            selectedRoom === 'create' &&
            'rounded-t-lg text-primary bg-secondary'
          }`}
          onClick={() => handeSelectedRoom('create')}
        >
          Nova reunião
        </span>
      </div>
      <div className="min-w-[580px] bg-secondary rounded-b-lg space-y-8 p-10">
        <RoomSelector selectedRoom={selectedRoom} />
      </div>
    </div>
  );
}

const RoomSelector = ({
  selectedRoom,
}: {
  selectedRoom: 'join' | 'create';
}) => {
  switch (selectedRoom) {
    case 'join':
      return <Join />;
    case 'create':
      return <Create />;
    default:
      return <Join />;
  }
};
