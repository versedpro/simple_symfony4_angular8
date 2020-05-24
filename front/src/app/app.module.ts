import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfigService } from './config.service';



// @NgModule({
//   declarations: [
//     AppComponent,
//     NavbarComponent,
//     CityListComponent,
//     HomeComponent,
//     ResultComponent,
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     RouterModule.forRoot([
//       { path: '', component: HomeComponent },
//     ])
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule, FormsModule, GridModule, HttpClientModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ConfigService ],
})

export class AppModule { }
