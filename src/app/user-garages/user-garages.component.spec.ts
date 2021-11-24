import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGaragesComponent } from './user-garages.component';

describe('UserGaragesComponent', () => {
  let component: UserGaragesComponent;
  let fixture: ComponentFixture<UserGaragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGaragesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGaragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
