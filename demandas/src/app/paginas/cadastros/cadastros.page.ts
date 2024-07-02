import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})

export class CadastrosPage implements OnInit {

  showForm_professor = false;
  showEditForm_professor = false;
  showList_professor = false; 

  professor = {
    nome_professor: '',
    matricula: '',
    observacao_professor: ''
  };

  selectedProfessor: any = null; 

  showForm_semestre = false;
  
  semestre = {
    ano: '',
    semestre: ''
  };

  professores: any[] = [];  

  constructor(private menu: MenuController, private apiService: ApiService) {}

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
    this.loadProfessores();  
    throw new Error('Method not implemented.');
  }

  toggleFormProfessor() {
    this.showForm_professor = !this.showForm_professor;
  }

  toggleListProfessor() {
    this.showList_professor = !this.showList_professor;
  }

  toggleFormProfessorEdite() {
    this.showEditForm_professor = !this.showEditForm_professor;
  }

  toggleEditFormProfessor() {
    this.showEditForm_professor = !this.showEditForm_professor;
  }

  loadProfessores() {
    this.apiService.getProfessores().subscribe(
      (response: any) => {
        console.log('Professores carregados:', response);
        this.professores = response;
      },
      (error: any) => {
        console.error('Erro ao carregar professores:', error);
      }
    );
  }

  addProfessor() {
    if (this.professor.nome_professor && this.professor.matricula && this.professor.observacao_professor) {
      this.apiService.createProfessor(this.professor).subscribe(
        (response: any) => {  
          console.log('Professor adicionado:', response);
          this.professor = {
            nome_professor: '',
            matricula: '',
            observacao_professor: ''
          };
          this.toggleFormProfessor(); 
          this.loadProfessores();  
        },
        (error: any) => {  
          console.error('Erro ao adicionar professor:', error);
        }
      );
    } else {
      console.error('Preencha todos os campos');
    }
  }

  listarProfessores() {
    console.log('Lista de Professores:', this.professores);
    // Aqui você pode fazer qualquer outra ação com a lista de professores, como exibir em uma lista na interface do usuário.
  }

  editProfessor(professor: any) {
    this.selectedProfessor = professor;
    this.showEditForm_professor = true;
    this.showList_professor = true; 
  }

  updateProfessor() {
    if (this.selectedProfessor) {
      this.apiService.updateProfessor(this.selectedProfessor.matricula, this.selectedProfessor).subscribe(
        (response: any) => {
          console.log('Professor atualizado:', response);
          this.selectedProfessor = null;
          this.toggleEditFormProfessor();
          this.showList_professor = true; 
          this.loadProfessores();  
        },
        (error: any) => {
          console.error('Erro ao atualizar professor:', error);
        }
      );
    } else {
      console.error('Nenhum professor selecionado para atualização');
    }
  }

  deleteProfessor(matricula: any) {
    console.log('Tentando excluir professor com ID:', matricula);
    if (matricula) {
      this.apiService.deleteProfessor(matricula).subscribe(
        (response: any) => {
          console.log('Professor excluído:', response);
          this.loadProfessores();
        },
        (error: any) => {
          console.error('Erro ao excluir professor:', error);
        }
      );
    } else {
      console.error('ID do professor não fornecido');
    }
  }

  toggleFormSemestre() {
    this.showForm_semestre = !this.showForm_semestre;
  }

  addAnoSemestre() {
    if (this.semestre.ano &&  this.semestre.semestre) {
      this.apiService.createSemestre(this.semestre).subscribe(
        (response: any) => {  
          console.log('Ano e Semestre adicionado:', response);
          this.semestre = {
            ano: '',
            semestre: '',
          };
          this.toggleFormSemestre(); 
        },
        (error: any) => {  
          console.error('Erro ao adicionar Ano e Semestre:', error);
        }
      );
    } else {
      console.error('Preencha todos os campos');
    }
  }
}
