import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTowerComponent } from './project-tower.component';

describe('ProjectTowerComponent', () => {
  let component: ProjectTowerComponent;
  let fixture: ComponentFixture<ProjectTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
