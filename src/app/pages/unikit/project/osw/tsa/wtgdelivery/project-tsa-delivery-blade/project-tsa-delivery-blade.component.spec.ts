import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliveryBladeComponent } from './project-tsa-delivery-blade.component';

describe('ProjectTsaDeliveryBladeComponent', () => {
  let component: ProjectTsaDeliveryBladeComponent;
  let fixture: ComponentFixture<ProjectTsaDeliveryBladeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliveryBladeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliveryBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
