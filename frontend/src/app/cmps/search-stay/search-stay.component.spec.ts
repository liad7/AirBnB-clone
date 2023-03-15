import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStayComponent } from './search-stay.component';

describe('SearchStayComponent', () => {
  let component: SearchStayComponent;
  let fixture: ComponentFixture<SearchStayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchStayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
