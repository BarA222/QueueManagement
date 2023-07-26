import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Client } from 'src/app/model/client';


@Component({
  selector: 'app-add-client-to-line',
  templateUrl: './add-client-to-line.component.html',
  styleUrls: ['./add-client-to-line.component.css']
})
export class AddClientToLineComponent implements OnInit {
  @Output() addToLineEvent = new EventEmitter<Client>();
  clientForm: FormGroup;
  clientsBaseUrl = "https://localhost:7121/api/Clients";


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient) {
    this.clientForm = this.formBuilder.group({
      fullName: ['', Validators.required],
       posts: this.formBuilder.array([])
       
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.clientForm.invalid) {
      return;
    }

    const client: Client = {
      id: undefined,
      fullName: this.clientForm.value.fullName,
      
    };


    console.log(client);
    
    this.http.post<Client>(this.clientsBaseUrl, client).subscribe(data => {
        console.log("response", data);
        this.addToLineEvent.emit(client);

    })
    window.location.reload();

  }
}
