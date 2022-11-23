import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincharComponent } from './mainchar.component';

describe('MaincharComponent', () => {
  let component: MaincharComponent;
  let fixture: ComponentFixture<MaincharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaincharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
