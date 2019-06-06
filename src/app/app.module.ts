import { AlertComponent } from './components/alert/alert.component';
import { ErrorHandlerService } from './service/error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Toaster } from './components/toaster/toaster.component';
import { PowerToaster } from './components/toaster/power-toaster.component';
import { NotificationService } from './service/notification.service';

@NgModule({
  declarations: [
    AppComponent,
    Toaster,
    PowerToaster,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: ErrorHandlerService
    },
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
