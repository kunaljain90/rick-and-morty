import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemLinkComponent } from './list-item-link.component';

describe('ListItemLinkComponent', () => {
  let component: ListItemLinkComponent;
  let fixture: ComponentFixture<ListItemLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
