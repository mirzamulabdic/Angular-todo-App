import { TestBed } from '@angular/core/testing';
import { Registration } from './shared/regData.model';

export class RegistrationService {
  private users: Registration[] = [
    new Registration('test', 'test@test.com', 'test1234'),
  ];

  newUser(user: Registration) {
    this.users.push(user);
  }
}
