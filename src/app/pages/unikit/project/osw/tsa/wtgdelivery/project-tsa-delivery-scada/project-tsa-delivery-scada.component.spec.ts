import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliveryScadaComponent } from './project-tsa-delivery-scada.component';

describe('ProjectTsaDeliveryScadaComponent', () => {
  let component: ProjectTsaDeliveryScadaComponent;
  let fixture: ComponentFixture<ProjectTsaDeliveryScadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliveryScadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliveryScadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
