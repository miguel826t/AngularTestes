import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SidebarComponent } from './modules/components/sidebar/sidebar.component';
import { UserCardComponent } from './modules/components/user-card/user-card.component';
import { PacienteListComponent } from './paciente-list/paciente-list.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserCardComponent,
    PacienteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
