import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-carga-horaria',
  templateUrl: './carga-horaria.page.html',
  styleUrls: ['./carga-horaria.page.scss'],
})

export class CargaHorariaPage implements OnInit {

  @ViewChild('barCanvas')
  public barCanvas!: ElementRef;
  barChart: any;

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
    this.createChart();
    throw new Error('Method not implemented.');
  }

  createChart() {
    const canvas = document.getElementById('earning') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas context not found');
      return;
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Carga Horária', 'Ensino', 'Turmas'],
        datasets: [{
          label: 'Média',
          data: [29, 13, 5],
          backgroundColor: 'rgba(0, 123, 255, 0.5)'
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
