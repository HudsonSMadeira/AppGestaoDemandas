import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-turmas-cursos',
  templateUrl: './turmas-cursos.page.html',
  styleUrls: ['./turmas-cursos.page.scss'],
})
export class TurmasCursosPage implements OnInit {

  constructor(private menu: MenuController) { }

  openMenu() {
    this.menu.get('first').then(menu => {
      if (menu) {
        menu.close().then(() => {
          requestAnimationFrame(() => {
            this.menu.open('first');
          });
        });
      } else {
        this.menu.open('first');
      }
    });
  }

  ngOnInit() {
    throw new Error('Method not implemented.');
  }

}
