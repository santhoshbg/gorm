import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.scss']
})

export class ListBookingComponent implements OnInit {
  public allBookings = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.getAllBookings();
  }

  getAllBookings() {
    this.allBookings = localStorage.getItem('bookingData') ? JSON.parse(localStorage.getItem('bookingData')) : [];
  }

  createBooking() {
    this.router.navigateByUrl('create-booking');
  }

  viewBooking(bookingData) {
    this.router.navigateByUrl('view-booking/' + bookingData.name);
  }

  deleteBooking(bookingData) {
    this.allBookings = this.allBookings.filter(x => x.name !== bookingData.name);
    localStorage.setItem('bookingData', JSON.stringify(this.allBookings));
  }

}
