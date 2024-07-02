import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurmasCursosPage } from './turmas-cursos.page';

describe('TurmasCursosPage', () => {
  let component: TurmasCursosPage;
  let fixture: ComponentFixture<TurmasCursosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
