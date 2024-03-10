import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BarbellComponent } from './home/barbell/barbell.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AboutComponent } from './home/about/about.component';
import { DownloadComponent } from './home/download/download.component';
import { FitnessComponent } from './home/fitness/fitness.component';
import { ExerciseCardComponent } from './home/fitness/exercise-card/exercise-card.component';
import { FooterComponent } from './home/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BarbellComponent,
    AboutComponent,
    DownloadComponent,
    FitnessComponent,
    ExerciseCardComponent,
    FooterComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
