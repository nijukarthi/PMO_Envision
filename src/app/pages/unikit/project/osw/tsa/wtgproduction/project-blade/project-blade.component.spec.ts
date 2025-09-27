import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBladeComponent } from './project-blade.component';

describe('ProjectBladeComponent', () => {
  let component: ProjectBladeComponent;
  let fixture: ComponentFixture<ProjectBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectBladeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
