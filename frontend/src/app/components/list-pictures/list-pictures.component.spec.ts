import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPicturesComponent } from './list-pictures.component';

describe('ListPicturesComponent', () => {
  let component: ListPicturesComponent;
  let fixture: ComponentFixture<ListPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
