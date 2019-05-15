import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { MaterialModule } from '../utils/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

@NgModule({
  declarations: [CreateBookingComponent, ListBookingComponent, ManageBookingComponent, ViewBookingComponent],
  imports: [
    CommonModule,
    BookingRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
  ]
})
export class BookingModule { }
