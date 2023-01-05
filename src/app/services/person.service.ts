import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPeople() {
    return [
      {id: 1, name: "Matheus", cpf: "000.000.000-00", numRG: "00000-00"},
      {id: 2, name: "Julia",   cpf: "000.000.000-00", numRG: "00000-00"},
      {id: 3, name: "Pedro",   cpf: "000.000.000-00", numRG: "00000-00"},
      {id: 4, name: "Tainara", cpf: "000.000.000-00", numRG: "00000-00"},
    ];
  }
}
