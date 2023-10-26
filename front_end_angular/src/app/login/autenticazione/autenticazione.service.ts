// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


  // Implementa qui i metodi di autenticazione login e logout


@Injectable({
  providedIn: 'root'
})
export class AutenticazioneService {
  private isAuthenticated: boolean = false; // Variabile per tracciare lo stato di autenticazione

  // Metodo per il login
  login(email: string, password: string): Promise<boolean> {
    
    return new Promise((resolve, reject) => {
      // Effettua una chiamata HTTP al tuo back-end per verificare le credenziali
      if (email === 'utente' && password === 'password') {
        this.isAuthenticated = true;
        resolve(true);
      } else {
        this.isAuthenticated = false;
        reject(false);
      }
    });
  }

  // Metodo per il logout
  logout(): void {
    // Effettua il logout eliminando il token JWT o invalidando la sessione
    this.isAuthenticated = false;
  }

  // Metodo per verificare se l'utente è autenticato
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}

