import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingDetails } from '../../utils/models/booking';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.scss']
})

export class ViewBookingComponent implements OnInit {

  public allBookings = [];
  public bookingData = new BookingDetails();

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const bookingID = this.route.snapshot.params ? this.route.snapshot.params.id : '';
    this.allBookings = localStorage.getItem('bookingData') ? JSON.parse(localStorage.getItem('bookingData')) : [];
    if(bookingID) {
      let bookingData = this.allBookings.filter(x => x.name === bookingID);
      if(bookingData.length > 0) {
        this.bookingData = bookingData[0];
      }
    }
  }

  onBack() {
    this.router.navigateByUrl('list-booking');
  }

}
