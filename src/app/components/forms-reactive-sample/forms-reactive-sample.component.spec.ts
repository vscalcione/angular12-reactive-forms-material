import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReactiveSampleComponent } from './forms-reactive-sample.component';

describe('FormsReactiveSampleComponent', () => {
  let component: FormsReactiveSampleComponent;
  let fixture: ComponentFixture<FormsReactiveSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsReactiveSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsReactiveSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
