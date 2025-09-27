import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNacelleComponent } from './project-nacelle.component';

describe('ProjectNacelleComponent', () => {
  let component: ProjectNacelleComponent;
  let fixture: ComponentFixture<ProjectNacelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectNacelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectNacelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
