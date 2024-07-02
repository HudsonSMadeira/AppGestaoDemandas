import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CargaHorariaPage } from './carga-horaria.page';

describe('CargaHorariaPage', () => {
  let component: CargaHorariaPage;
  let fixture: ComponentFixture<CargaHorariaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaHorariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
