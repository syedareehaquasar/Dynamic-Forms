import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupPropertiesComponent } from './list-group-properties.component';

describe('ListGroupPropertiesComponent', () => {
  let component: ListGroupPropertiesComponent;
  let fixture: ComponentFixture<ListGroupPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupPropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
