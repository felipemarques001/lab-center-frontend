import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    LoginInputComponent,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
}
