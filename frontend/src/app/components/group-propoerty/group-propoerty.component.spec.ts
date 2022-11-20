import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPropoertyComponent } from './group-propoerty.component';

describe('GroupPropoertyComponent', () => {
  let component: GroupPropoertyComponent;
  let fixture: ComponentFixture<GroupPropoertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPropoertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupPropoertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
