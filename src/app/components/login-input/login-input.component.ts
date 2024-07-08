import { Component, Input, input } from '@angular/core';
import { ControlContainer, FormsModule, NgForm } from '@angular/forms';

type InputType = "text" | "password"; 

@Component({
  selector: 'app-login-input',
  standalone: true,
  imports: [FormsModule],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: NgForm,
    }
  ],
  templateUrl: './login-input.component.html',
  styleUrl: './login-input.component.scss'
})
export class LoginInputComponent {
  @Input() labelText: String = "";
  @Input() inputType: InputType = "password"; 
  @Input() placeholder: String = "";
  @Input() inputName: string = "";
  @Input() inputId: string = "";
  @Input() imageSrc: String = "";
}
