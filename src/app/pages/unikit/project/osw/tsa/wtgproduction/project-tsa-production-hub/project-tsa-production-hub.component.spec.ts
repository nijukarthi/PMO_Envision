import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaProductionHubComponent } from './project-tsa-production-hub.component';

describe('ProjectTsaProductionHubComponent', () => {
  let component: ProjectTsaProductionHubComponent;
  let fixture: ComponentFixture<ProjectTsaProductionHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaProductionHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaProductionHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
