import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.page.html',
  styleUrls: ['./disciplinas.page.scss'],
})
export class DisciplinasPage implements OnInit {
  

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
