import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CavConfigMainComponent } from './cav-config-main.component';

describe('CavConfigMainComponent', () => {
  let component: CavConfigMainComponent;
  let fixture: ComponentFixture<CavConfigMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavConfigMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CavConfigMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
