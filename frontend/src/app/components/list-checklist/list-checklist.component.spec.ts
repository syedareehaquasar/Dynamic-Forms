import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChecklistComponent } from './list-checklist.component';

describe('ListChecklistComponent', () => {
  let component: ListChecklistComponent;
  let fixture: ComponentFixture<ListChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
