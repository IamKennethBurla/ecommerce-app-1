import { numberWithCommas } from '@common-utils';

interface IRoomCardDetails {
  destinationName: string;
  distance: number;
  distanceUnit: string;
  price: number;
  ratings: number;
  isFavorite: boolean;
  daysOfAvailability: number;
}

export function RoomCardDetails(props: IRoomCardDetails) {
  const {
    destinationName,
    distance,
    distanceUnit,
    price,
    ratings,
    daysOfAvailability,
  } = props;

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 flex items-center">
        <svg
          fill="#000000"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 mr-1"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>star</title>
            <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
          </g>
        </svg>
        <p>{ratings}</p>
      </div>
      <h2 className="mt-3 font-medium mb-[-3px]">{destinationName}</h2>
      <p className="text-gray-500 mb-[-3px]">
        {distance} {`${distanceUnit}${distance > 1 ? 's' : null}`} away
      </p>
      <p className="text-gray-500">{daysOfAvailability} nights</p>
      <p className="underline mt-1">
        <span className="font-medium">₱{numberWithCommas(price)}</span> total
        before taxes
      </p>
    </div>
  );
}
