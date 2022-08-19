import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCastComponent } from './create-cast/create-cast.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateCastComponent,
    CreateMovieComponent
  ],
  imports: [
    AdminRoutingModule, 
    FormsModule,
    NgxChartsModule,
  ],
  providers: [
  ]
})
export class AdminModule { }
