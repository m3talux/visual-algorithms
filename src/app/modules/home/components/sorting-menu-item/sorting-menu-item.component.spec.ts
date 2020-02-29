import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingMenuItemComponent } from './sorting-menu-item.component';

describe('SortingMenuItemComponent', () => {
  let component: SortingMenuItemComponent;
  let fixture: ComponentFixture<SortingMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortingMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
