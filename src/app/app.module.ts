import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { OrderContainerComponent } from './order-container/order-container.component';
import { UserListComponent } from './user-container/user-list/user-list.component';
import { UserDetailComponent } from './user-container/user-detail/user-detail.component';
import { UserSigleComponent } from './share/user-sigle/user-sigle.component';
import { OrderListComponent } from './order-container/order-list/order-list.component';
import { OrderSingleComponent } from './order-container/order-single/order-single.component';
import { OrderDetailComponent } from './order-container/order-single/order-detail/order-detail.component';
import { HeaderComponent } from './share/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    OrderContainerComponent,
    UserListComponent,
    UserDetailComponent,
    UserSigleComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
