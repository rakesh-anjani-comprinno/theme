import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoForm3Component } from './demo-form-3.component';

describe('DemoForm3Component', () => {
  let component: DemoForm3Component;
  let fixture: ComponentFixture<DemoForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoForm3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
