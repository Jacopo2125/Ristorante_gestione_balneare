import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Risultato } from './Risposta';
import { Ristorante } from './Ristorante';
import { Recensione } from './Recensione';


@Injectable({
  providedIn: 'root'
})
export class RistoranteService {

  private endPointR: string = "http://localhost:5000/api/ristorante"
  private endPointRc: string = "http://localhost:5000/api/recensione"
  private endPointL: string = "http://localhost:5000/api/login"

  constructor(private http: HttpClient) {

  }

  cercaTuttiRistoranti() {
    return this.http.get<Risultato>(this.endPointR)
  }

  cercaRistorantePerId(varId: string) {
    return this.http.get<Risultato>(`${this.endPointR}/${varId}`)
  }

  inserisciRistorante(objStu: Ristorante) {

    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>(this.endPointR, JSON.stringify(objStu), { headers: header_custom })
  }

  inserisciRecensione(objStu: Recensione) {

    var header_custom = new HttpHeaders();
    header_custom = header_custom.set('Content-Type', 'application/json');

    return this.http.post<Risultato>(this.endPointRc, JSON.stringify(objStu), { headers: header_custom })
  }
}
