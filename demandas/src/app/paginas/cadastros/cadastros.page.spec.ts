import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadatrosPage } from './cadastros.page';

describe('CadatrosPage', () => {
  let component: CadatrosPage;
  let fixture: ComponentFixture<CadatrosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadatrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
