import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliveryHubComponent } from './project-tsa-delivery-hub.component';

describe('ProjectTsaDeliveryHubComponent', () => {
  let component: ProjectTsaDeliveryHubComponent;
  let fixture: ComponentFixture<ProjectTsaDeliveryHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliveryHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliveryHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
