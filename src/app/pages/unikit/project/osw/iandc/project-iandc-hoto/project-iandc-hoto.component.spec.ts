import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcHotoComponent } from './project-iandc-hoto.component';

describe('ProjectIandcHotoComponent', () => {
  let component: ProjectIandcHotoComponent;
  let fixture: ComponentFixture<ProjectIandcHotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcHotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcHotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
