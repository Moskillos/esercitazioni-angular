import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ListComponent } from './user-details/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
