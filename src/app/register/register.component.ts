import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Registration } from '../shared/regData.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private registrationService: RegistrationService) {}

  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  ngOnInit(): void {}
  onRegister() {
    const username = this.usernameInput.nativeElement.value;
    const email = this.emailInput.nativeElement.value;
    const password = this.passwordInput.nativeElement.value;
    const newUser = new Registration(username, email, password);
    this.registrationService.newUser(newUser);
  }
}
