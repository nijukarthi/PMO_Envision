import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcReceivingBladeComponent } from './project-iandc-receiving-blade.component';

describe('ProjectIandcReceivingBladeComponent', () => {
  let component: ProjectIandcReceivingBladeComponent;
  let fixture: ComponentFixture<ProjectIandcReceivingBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcReceivingBladeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcReceivingBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
