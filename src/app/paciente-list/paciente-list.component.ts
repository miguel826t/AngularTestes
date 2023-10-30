import { Component, OnInit } from '@angular/core';
import { PacienteListService } from '../services/paciente-list.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.scss']
})
export class PacienteListComponent implements OnInit{

  public pacienteList: Array<String>=[]
  constructor(private pacienteListService: PacienteListService){ }

  ngOnInit(): void {
      this.pacienteList = this.pacienteListService.pacienteList();
  }
}
