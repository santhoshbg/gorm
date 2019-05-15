import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})

export class CreateBookingComponent implements OnInit {
  public bookingForm: FormGroup;
  public allBookings = [];
  public isSubmitted = false;

  constructor(private router: Router) {
    this.bookingForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(256)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(320), Validators.email]),
      roomType: new FormControl('', [Validators.required]),
      checkIn: new FormControl('', [Validators.required]),
      checkOut: new FormControl('', [Validators.required]),
      pickup: new FormControl(false),
      pickupAddress: new FormControl('', [Validators.maxLength(2040)])
    });
  }

  ngOnInit() {
    this.allBookings = localStorage.getItem('bookingData') ? JSON.parse(localStorage.getItem('bookingData')) : [];
  }

  createBooking() {
    this.isSubmitted = true;
    if (this.bookingForm.invalid) {

    } else {
      this.allBookings.push(this.bookingForm.value);
      localStorage.setItem('bookingData', JSON.stringify(this.allBookings));
      this.router.navigateByUrl('list-booking');
    }
  }

  cancelBooking() {
    this.router.navigateByUrl('list-booking');
  }

}
