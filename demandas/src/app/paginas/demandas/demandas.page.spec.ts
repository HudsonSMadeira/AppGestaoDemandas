import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandasPage } from './demandas.page';

describe('DemandasPage', () => {
  let component: DemandasPage;
  let fixture: ComponentFixture<DemandasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
