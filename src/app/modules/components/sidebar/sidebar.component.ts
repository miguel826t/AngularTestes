import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  public isSideBarOpen: boolean = false;
  public loading: boolean = true;

  constructor(private http: HttpClient) {
    this.getData();
  }

  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }

  getData() {
    this.loading = true;
    this.http.get('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      .subscribe((data) => {
        // Lógica para manipular os dados recebidos
        this.loading = false; // Oculta o preloader após o recebimento dos dados
      });
  }
}

