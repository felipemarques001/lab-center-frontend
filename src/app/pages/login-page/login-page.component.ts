import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { LoginInputComponent } from '../../components/login-input/login-input.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    LoginInputComponent,
  ],
  providers: [
    LoginService,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(
    private readonly loginService: LoginService,
    private readonly toastrService: ToastrService,
    private readonly router: Router,
  ) { }

  submit(formData: NgForm) {
    this.loginService
      .login(formData.value.username, formData.value.password)
      .subscribe({
        next: () => this.navigateToHome(),
        error: (err: Error) => this.toastrService.error(err.message),
      });
  }

  private navigateToHome() {
    this.router.navigate(["home"]);
  }
}
