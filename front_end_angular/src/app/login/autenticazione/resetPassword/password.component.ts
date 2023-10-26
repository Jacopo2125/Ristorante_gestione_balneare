// reset-password.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  newPassword: string = '';
  confirmaPassword: string = '';
  resetSuccessful: boolean = false;

  resetPassword() {
    // Verifica che le password coincidano
    if (this.newPassword === this.confirmaPassword) {
      // Esegui la logica di reset della password
      this.resetSuccessful = true;
    } else {
      // Password non corrispondenti
      console.log('Le password non corrisponde.');
    }
  }
}