import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { OrderComponent } from './order/order/order.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserSingleComponent } from './user/user-single/user-single.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderSingleComponent } from './order/order-single/order-single.component';
import { OrderListComponent } from './order/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    OrderComponent,
    UserListComponent,
    UserDetailComponent,
    UserSingleComponent,
    OrderDetailComponent,
    OrderSingleComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
