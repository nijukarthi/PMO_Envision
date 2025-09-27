import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliveryTowerComponent } from './project-tsa-delivery-tower.component';

describe('ProjectTsaDeliveryTowerComponent', () => {
  let component: ProjectTsaDeliveryTowerComponent;
  let fixture: ComponentFixture<ProjectTsaDeliveryTowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliveryTowerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliveryTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
