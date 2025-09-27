import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSiteAccessoriesComponent } from './project-site-accessories.component';

describe('ProjectSiteAccessoriesComponent', () => {
  let component: ProjectSiteAccessoriesComponent;
  let fixture: ComponentFixture<ProjectSiteAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSiteAccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSiteAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
