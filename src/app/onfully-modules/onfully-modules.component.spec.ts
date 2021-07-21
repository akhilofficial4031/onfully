import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnfullyModulesComponent } from './onfully-modules.component';

describe('OnfullyModulesComponent', () => {
  let component: OnfullyModulesComponent;
  let fixture: ComponentFixture<OnfullyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnfullyModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnfullyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
