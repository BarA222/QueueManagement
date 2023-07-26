
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { AddClientToLineComponent } from './components/add-client-to-line/add-client-to-line.component';
import { ClientInServiceComponent } from './components/client-in-service/client-in-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsListComponent,
    AddClientToLineComponent,
    ClientInServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
