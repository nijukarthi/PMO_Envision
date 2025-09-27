import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAnchorcageComponent } from './project-anchorcage.component';

describe('ProjectAnchorcageComponent', () => {
  let component: ProjectAnchorcageComponent;
  let fixture: ComponentFixture<ProjectAnchorcageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAnchorcageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAnchorcageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
