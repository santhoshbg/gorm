export class BookingDetails {
    public name: string;
    public email: string;
    public roomType: string;
    public checkIn: string;
    public checkOut: string;
    public pickup: boolean;
    public pickupAddress: boolean;

    constructor(d: any = {}) {
        this.name = d.name || '';
        this.email = d.email || '';
        this.roomType = d.roomType || '';
        this.checkIn = d.checkIn || '';
        this.checkOut = d.checkOut || '';
        this.pickup = d.pickup || false;
        this.pickupAddress = d.pickupAddress || '';
    }
}
