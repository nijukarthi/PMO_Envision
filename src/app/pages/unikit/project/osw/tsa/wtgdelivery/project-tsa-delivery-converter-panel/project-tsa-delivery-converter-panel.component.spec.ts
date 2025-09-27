import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliveryConverterPanelComponent } from './project-tsa-delivery-converter-panel.component';

describe('ProjectTsaDeliveryConverterPanelComponent', () => {
  let component: ProjectTsaDeliveryConverterPanelComponent;
  let fixture: ComponentFixture<ProjectTsaDeliveryConverterPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliveryConverterPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliveryConverterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
