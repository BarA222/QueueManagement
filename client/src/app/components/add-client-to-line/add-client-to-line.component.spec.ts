import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientToLineComponent } from './add-client-to-line.component';

describe('AddClientToLineComponent', () => {
  let component: AddClientToLineComponent;
  let fixture: ComponentFixture<AddClientToLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddClientToLineComponent]
    });
    fixture = TestBed.createComponent(AddClientToLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
