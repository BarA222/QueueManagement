import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Client } from './model/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LittleQflow';
  clients: Client[];
  selectedClient?: Client;
  clientBaseUrl = "https://localhost:7121/api/Clients";

  constructor(private http: HttpClient) {
    this.clients = [];
    this.refreshLine();
  }


  refreshLine(){
    this.http.get<Client[]>(this.clientBaseUrl).subscribe(data => {
      this.clients = data;
    })

  }

  onAddToLine($event: Client){
    console.log("app: client added", $event);
    this.refreshLine();
    this.selectedClient = $event
  }

  onAdvanceInLine($event: Client){
    console.log("app: client added", $event);
    this.refreshLine();
    this.selectedClient = $event
  }
}
