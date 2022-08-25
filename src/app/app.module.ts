import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { MoviesCreateComponent } from './core/movies/movies-create/movies-create.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { NgProgressComponent, NgProgressModule } from 'ngx-progressbar';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressBarInterceptor } from './interceptors/progress-bar.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,    
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgProgressModule,
    
    AdminModule,
    UserModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:ErrorHandlingInterceptor, multi:true
    }, 
    {provide: HTTP_INTERCEPTORS, useClass:ProgressBarInterceptor, multi:true},
    HttpClient,
    
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
