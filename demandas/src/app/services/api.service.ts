import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Função de login
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}api/token/`, { username, password });
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>('sua_url_para_obter_usuario_atual');
  }

  // Crud Professor
  getProfessores(): Observable<any> {
    return this.http.get(`${this.apiUrl}Professor/`);
  }

  createProfessor(professor: { nome_professor: string; matricula: string; observacao_professor: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}Professor/`, professor);
  }

  updateProfessor(matricula: any, professor: any): Observable<any> {
    return this.http.put(`${this.apiUrl}Professor/${matricula}/`, professor);
  }

  deleteProfessor(matricula: any): Observable<any> {
    console.log(`URL para excluir professor: ${this.apiUrl}Professor/${matricula}/`); 
    return this.http.delete(`${this.apiUrl}Professor/${matricula}/`);
  }  

  // Ano e Semestre
  getSemestre(): Observable<any> {
    return this.http.get(`${this.apiUrl}Semestre/`);
  }

  createSemestre(semestre: { ano: string; semestre: string; }): Observable<any> {
    return this.http.post(`${this.apiUrl}Semestre/`, semestre);
  }

  updateSemestre(id: any, semestre: any): Observable<any> {
    return this.http.put(`${this.apiUrl}Semestre/${id}/`, semestre);
  }

  deleteSemestre(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}Semestre/${id}/`);
  }
}
