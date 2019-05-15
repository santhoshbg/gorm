import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';

const routes: Routes = [
  {
    path: '',
    component: ListBookingComponent
  },
  {
    path: 'list-booking',
    component: ListBookingComponent
  },
  {
    path: 'create-booking',
    component: CreateBookingComponent
  },
  {
    path: 'view-booking/:id',
    component: ViewBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
