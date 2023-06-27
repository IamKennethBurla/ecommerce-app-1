export interface IRoomDetails {
    images: Images[]
    ratings: number
    isFavorite: boolean
    destinationInfo: DestinationInfo
    roomInfo: RoomInfo
    ownerInfo: OwnerInfo
}

type OwnerInfo = {
    name: string
}

type Images = {
    url: string
}

type DestinationInfo = {
    name: string
    distance: number
    unit: string
}

type RoomInfo = {
    price: number,
    description: string
    capacity: number
    bedrooms: number
    beds: number
    bathrooms: number
}