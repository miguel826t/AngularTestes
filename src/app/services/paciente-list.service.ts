import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteListService {

  private list: Array<String> = [
    "Miguel",
    "Rosa",
    "Pati",
    "Cavalcante",
    "M de macaco"
  ];


  constructor() { }

  public pacienteList(){
    return this.list;
  }

}
