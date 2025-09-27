import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliveryAnchorcageComponent } from './project-tsa-delivery-anchorcage.component';

describe('ProjectTsaDeliveryAnchorcageComponent', () => {
  let component: ProjectTsaDeliveryAnchorcageComponent;
  let fixture: ComponentFixture<ProjectTsaDeliveryAnchorcageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliveryAnchorcageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliveryAnchorcageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
