import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTemplateSampleComponent } from './forms-template-sample.component';

describe('FormsTemplateSampleComponent', () => {
  let component: FormsTemplateSampleComponent;
  let fixture: ComponentFixture<FormsTemplateSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsTemplateSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTemplateSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
