import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConverterPanelComponent } from './project-converter-panel.component';

describe('ProjectConverterPanelComponent', () => {
  let component: ProjectConverterPanelComponent;
  let fixture: ComponentFixture<ProjectConverterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectConverterPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectConverterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
