import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSeniorsComponent } from './page-seniors.component';

describe('PageSeniorsComponent', () => {
  let component: PageSeniorsComponent;
  let fixture: ComponentFixture<PageSeniorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSeniorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSeniorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
