import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectIandcReceivingSiteaccessoriesComponent } from './project-iandc-receiving-siteaccessories.component';

describe('ProjectIandcReceivingSiteaccessoriesComponent', () => {
  let component: ProjectIandcReceivingSiteaccessoriesComponent;
  let fixture: ComponentFixture<ProjectIandcReceivingSiteaccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectIandcReceivingSiteaccessoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectIandcReceivingSiteaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
