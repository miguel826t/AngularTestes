import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
    public isSideBarOpen = false;

    toggleSideBar(){
      this.isSideBarOpen = !this.isSideBarOpen;
    }
}
