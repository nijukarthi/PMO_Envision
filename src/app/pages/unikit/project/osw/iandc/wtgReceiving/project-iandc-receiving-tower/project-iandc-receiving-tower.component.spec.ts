import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcReceivingTowerComponent } from './project-iandc-receiving-tower.component';

describe('ProjectIandcReceivingTowerComponent', () => {
  let component: ProjectIandcReceivingTowerComponent;
  let fixture: ComponentFixture<ProjectIandcReceivingTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcReceivingTowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcReceivingTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
