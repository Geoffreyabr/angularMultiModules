import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminUserComponent } from './page-admin-user.component';

describe('PageAdminUserComponent', () => {
  let component: PageAdminUserComponent;
  let fixture: ComponentFixture<PageAdminUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAdminUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAdminUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
