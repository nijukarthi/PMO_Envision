import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcReceivingAnchorcageComponent } from './project-iandc-receiving-anchorcage.component';

describe('ProjectIandcReceivingAnchorcageComponent', () => {
  let component: ProjectIandcReceivingAnchorcageComponent;
  let fixture: ComponentFixture<ProjectIandcReceivingAnchorcageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcReceivingAnchorcageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcReceivingAnchorcageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
