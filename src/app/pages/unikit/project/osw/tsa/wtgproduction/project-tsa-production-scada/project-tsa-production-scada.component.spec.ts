import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaProductionScadaComponent } from './project-tsa-production-scada.component';

describe('ProjectTsaProductionScadaComponent', () => {
  let component: ProjectTsaProductionScadaComponent;
  let fixture: ComponentFixture<ProjectTsaProductionScadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaProductionScadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaProductionScadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
