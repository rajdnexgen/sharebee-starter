import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInformationComponent } from './listing-information.component';

describe('ListingInformationComponent', () => {
  let component: ListingInformationComponent;
  let fixture: ComponentFixture<ListingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
