import { NgModule } from '@angular/core';
  
// Importing forms module
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   
   
import { AppComponent }   from './app.component';
import { MaincharComponent } from './mainchar/mainchar.component';
   
@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    MaincharComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
      
  ]
})
export class AppModule { }