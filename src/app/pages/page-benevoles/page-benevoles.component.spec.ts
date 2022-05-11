import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBenevolesComponent } from './page-benevoles.component';

describe('PageBenevolesComponent', () => {
  let component: PageBenevolesComponent;
  let fixture: ComponentFixture<PageBenevolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBenevolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBenevolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
