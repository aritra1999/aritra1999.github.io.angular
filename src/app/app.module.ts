import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarSmallComponent } from './navbar-small/navbar-small.component';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailBodyComponent } from './email-body/email-body.component';
import { EmailTopbarComponent } from './email-topbar/email-topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PapersComponent } from './pages/papers/papers.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { AboutComponent } from './pages/about/about.component';
import { DefaultComponent } from './pages/default/default.component';
import { RouterModule, Routes } from '@angular/router';
import { PageTopComponent } from './utils/page-top/page-top.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'papers', component: PapersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSmallComponent,
    ProfileDropdownComponent,
    LeftbarComponent,
    EmailListComponent,
    EmailBodyComponent,
    EmailTopbarComponent,
    HomeComponent,
    ProjectsComponent,
    PapersComponent,
    ResumeComponent,
    AboutComponent,
    DefaultComponent,
    PageTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
