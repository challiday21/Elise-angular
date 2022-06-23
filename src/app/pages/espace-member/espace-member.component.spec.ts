import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMemberComponent } from './espace-member.component';

describe('EspaceMemberComponent', () => {
  let component: EspaceMemberComponent;
  let fixture: ComponentFixture<EspaceMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceMemberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
