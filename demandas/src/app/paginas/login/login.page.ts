import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'; // Certifique-se de ajustar o caminho para o serviço API conforme necessário
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    
  }

  login() {
    this.apiService.login(this.username, this.password).subscribe(
      (response: any) => { 
        localStorage.setItem('authToken', response.token);
        this.router.navigate(['/carga-horaria']); 
      },
      (error: any) => {
        this.errorMessage = 'Erro no Login ! Verifique seu usuário e senha.';
      }
    );
  }
}
