import { Component, OnInit } from '@angular/core';
import { PacienteListService } from 'src/app/services/paciente-list.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit{

  public pacienteList: Array<String>=[]
  constructor(private pacienteListService: PacienteListService){ }

  ngOnInit(): void {
      this.pacienteList = this.pacienteListService.pacienteList();
  }
}