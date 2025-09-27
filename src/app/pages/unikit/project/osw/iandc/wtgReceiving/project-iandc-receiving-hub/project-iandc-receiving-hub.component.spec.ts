import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcReceivingHubComponent } from './project-iandc-receiving-hub.component';

describe('ProjectIandcReceivingHubComponent', () => {
  let component: ProjectIandcReceivingHubComponent;
  let fixture: ComponentFixture<ProjectIandcReceivingHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcReceivingHubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcReceivingHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
