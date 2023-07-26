import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInServiceComponent } from './client-in-service.component';

describe('ClientInServiceComponent', () => {
  let component: ClientInServiceComponent;
  let fixture: ComponentFixture<ClientInServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientInServiceComponent]
    });
    fixture = TestBed.createComponent(ClientInServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
