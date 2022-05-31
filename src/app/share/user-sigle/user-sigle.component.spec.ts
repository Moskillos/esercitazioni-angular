import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSigleComponent } from './user-sigle.component';

describe('UserSigleComponent', () => {
  let component: UserSigleComponent;
  let fixture: ComponentFixture<UserSigleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSigleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSigleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
