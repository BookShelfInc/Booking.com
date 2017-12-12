import { Hotel, RoomBookings } from './hotel';

export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    payment: number;
    
    reviews: Review[];
    reservations: Reservation[];
}

export class Review{
    id?: number;
    content: string;
    stars: number;
    hotel?: Hotel;
    user?: User;
}

export class Reservation{
    id: number;
    user: User;
    reservedRooms: RoomBookings;
}