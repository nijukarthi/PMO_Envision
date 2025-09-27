import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTsaDeliverySiteAccessoriesComponent } from './project-tsa-delivery-site-accessories.component';

describe('ProjectTsaDeliverySiteAccessoriesComponent', () => {
  let component: ProjectTsaDeliverySiteAccessoriesComponent;
  let fixture: ComponentFixture<ProjectTsaDeliverySiteAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTsaDeliverySiteAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTsaDeliverySiteAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
