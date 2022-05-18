import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCreateUserComponent } from './confirm-create-user.component';

describe('ConfirmCreateUserComponent', () => {
  let component: ConfirmCreateUserComponent;
  let fixture: ComponentFixture<ConfirmCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCreateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
