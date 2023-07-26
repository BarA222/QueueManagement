import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter,  OnInit,  Output } from '@angular/core';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client-in-service',
  templateUrl: './client-in-service.component.html',
  styleUrls: ['./client-in-service.component.css']
})
export class ClientInServiceComponent  implements OnInit {
  client: Client | undefined;
   @Output() advanceInLine  = new EventEmitter();
   clientsBaseUrl = "https://localhost:7121/api/Clients/next";
   getClientUrl = "https://localhost:7121/api/Clients/inService";

   constructor(private http: HttpClient) {
   
  }

  ngOnInit() {
     //Get in service client
     this.http.get<Client>(this.getClientUrl).subscribe(data =>{
      this.client = data;
      this.advanceInLine.emit();

    })
  }

  serviceNext(){
      // Update current client status
      let params = new HttpParams().set('status', 1);

      this.http.put<Client>(this.clientsBaseUrl, null).subscribe(data => {
        console.log("response", data);
        // Take the first one from the clients list and change his status to 1
        this.advanceInLine.emit();

    })
    window.location.reload();

  }

 

}
