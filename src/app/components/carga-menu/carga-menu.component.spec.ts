import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaMenuComponent } from './carga-menu.component';

describe('CargaMenuComponent', () => {
  let component: CargaMenuComponent;
  let fixture: ComponentFixture<CargaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
