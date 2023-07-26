import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../model/client';
//import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent {
  @Input() clients: Observable<Client[]> | undefined;
  clientsBaseUrl = "https://localhost:7121/api/Clients";

  onAddToLine($event: any){
    console.log("list: client added", $event);
  }

}
