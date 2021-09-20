
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from './Service/StorageService';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    NgForm,
    FormsModule,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
