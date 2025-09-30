import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcCommissioningComponent } from './project-iandc-commissioning.component';

describe('ProjectIandcCommissioningComponent', () => {
  let component: ProjectIandcCommissioningComponent;
  let fixture: ComponentFixture<ProjectIandcCommissioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcCommissioningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcCommissioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
