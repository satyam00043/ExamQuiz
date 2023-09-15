import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChieldComponent } from './chield.component';

describe('ChieldComponent', () => {
  let component: ChieldComponent;
  let fixture: ComponentFixture<ChieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChieldComponent]
    });
    fixture = TestBed.createComponent(ChieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
