import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliveryNacelleComponent } from './project-tsa-delivery-nacelle.component';

describe('ProjectTsaDeliveryNacelleComponent', () => {
  let component: ProjectTsaDeliveryNacelleComponent;
  let fixture: ComponentFixture<ProjectTsaDeliveryNacelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliveryNacelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliveryNacelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
