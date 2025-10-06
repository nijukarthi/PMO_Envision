import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WtgDetailsComponent } from './wtg-details.component';

describe('WtgDetailsComponent', () => {
  let component: WtgDetailsComponent;
  let fixture: ComponentFixture<WtgDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WtgDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WtgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
