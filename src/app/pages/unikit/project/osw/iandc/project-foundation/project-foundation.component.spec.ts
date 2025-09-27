import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFoundationComponent } from './project-foundation.component';

describe('ProjectFoundationComponent', () => {
  let component: ProjectFoundationComponent;
  let fixture: ComponentFixture<ProjectFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFoundationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
