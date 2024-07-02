import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

// Define the interface for Professor
interface Professor {
  nome: string;
  disciplina: string;
  laboratorio: string;
  cargaHoraria: number;
  aulasSemana: number;
  turma: string;
}

@Component({
  selector: 'app-demandas',
  templateUrl: './demandas.page.html',
  styleUrls: ['./demandas.page.scss'],
})

export class DemandasPage {
  professores: Professor[] = [];

  constructor(private alertController: AlertController, private menu: MenuController) {
    this.loadProfessores();
  }

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

  async presentAddProfessorAlert() {
    const alert = await this.alertController.create({
      header: 'Adicionar Professor',
      inputs: [
        { name: 'nome', type: 'text', placeholder: 'Nome do Professor' },
        { name: 'disciplina', type: 'text', placeholder: 'Disciplina' },
        { name: 'laboratorio', type: 'checkbox', label: 'Laboratório', value: 'sim' || 'Não' },
        { name: 'cargaHoraria', type: 'number', placeholder: 'Carga Horária' },
        { name: 'aulasSemana', type: 'number', placeholder: 'Aulas por Semana' },
        { name: 'turma', type: 'text', placeholder: 'Turma' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Salvar', handler: (data: any) => this.addProfessor(data) },
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  addProfessor(professor: any) {
    this.professores.push(professor);
    this.saveProfessores();
  }

  editProfessor(index: number) {
    const professor = this.professores[index];
    this.presentEditProfessorAlert(professor, index);
  }

  async presentEditProfessorAlert(professor: Professor, index: number) {
    const alert = await this.alertController.create({
      header: 'Editar Professor',
      inputs: [
        { name: 'nome', type: 'text', value: professor.nome, placeholder: 'Nome do Professor' },
        { name: 'disciplina', type: 'text', value: professor.disciplina, placeholder: 'Disciplina' },
        { name: 'laboratorio', type: 'checkbox', checked: professor.laboratorio === 'sim', label: 'Laboratório', value: 'sim' || 'Não' },
        { name: 'cargaHoraria', type: 'number', value: professor.cargaHoraria, placeholder: 'Carga Horária' },
        { name: 'aulasSemana', type: 'number', value: professor.aulasSemana, placeholder: 'Aulas por Semana' },
        { name: 'turma', type: 'text', value: professor.turma, placeholder: 'Turma' },
      ],
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        { text: 'Salvar', handler: (data: any) => this.updateProfessor(data, index) },
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  updateProfessor(professor: any, index: number) {
    this.professores[index] = professor;
    this.saveProfessores();
  }

  deleteProfessor(index: number) {
    this.professores.splice(index, 1);
    this.saveProfessores();
  }

  saveProfessores() {
    localStorage.setItem('professores', JSON.stringify(this.professores));
  }

  loadProfessores() {
    const storedProfessores = localStorage.getItem('professores');
    if (storedProfessores) {
      this.professores = JSON.parse(storedProfessores);
    }
  }
}
