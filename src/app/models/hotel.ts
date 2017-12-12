import { Review, Reservation } from './user';

export class Hotel{
    id?: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    address?: string;
    city?: string;
    country?: string;
    longitude?: number;
    latitude?: number;

    rooms?: Room[];
    reviews?: Review[];
}

export class Room{
    id: number;
    description: string;
    smoke: boolean;
    maxCapacity: number;
    hotel: Hotel;
    roomBookings: RoomBookings;
}

export class RoomBookings{
    id: number;
    dateFrom: Date;
    dateTo: Date;
    price: number;
    room: Room;
    reservation: Reservation;
}
