import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayEditComponent } from './stay-edit.component';

describe('StayEditComponent', () => {
  let component: StayEditComponent;
  let fixture: ComponentFixture<StayEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
