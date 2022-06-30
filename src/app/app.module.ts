import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShowCounterComponent } from './show-counter/show-counter.component';
import { EditCounterComponent } from './edit-counter/edit-counter.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ShowCounterComponent,
    EditCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
