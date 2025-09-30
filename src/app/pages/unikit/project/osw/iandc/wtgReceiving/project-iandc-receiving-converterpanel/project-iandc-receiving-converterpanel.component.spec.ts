import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcReceivingConverterpanelComponent } from './project-iandc-receiving-converterpanel.component';

describe('ProjectIandcReceivingConverterpanelComponent', () => {
  let component: ProjectIandcReceivingConverterpanelComponent;
  let fixture: ComponentFixture<ProjectIandcReceivingConverterpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcReceivingConverterpanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcReceivingConverterpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
