import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcReceivingNacelleComponent } from './project-iandc-receiving-nacelle.component';

describe('ProjectIandcReceivingNacelleComponent', () => {
  let component: ProjectIandcReceivingNacelleComponent;
  let fixture: ComponentFixture<ProjectIandcReceivingNacelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcReceivingNacelleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcReceivingNacelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
