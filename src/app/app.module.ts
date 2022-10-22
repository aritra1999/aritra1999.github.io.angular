import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarSmallComponent } from './components/navbar-small/navbar-small.component';
import { ProfileDropdownComponent } from './components/profile-dropdown/profile-dropdown.component';
import { EmailBodyComponent } from './layout/email-body/email-body.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PapersComponent } from './pages/papers/papers.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { DefaultComponent } from './pages/default/default.component';
import { RouterModule, Routes } from '@angular/router';
import { PageTopComponent } from './components/page-top/page-top.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { LeftbarComponent } from './components/leftbar/leftbar.component';
import { EmailListComponent } from './layout/email-list/email-list.component';
import { EmailTopbarComponent } from './layout/email-topbar/email-topbar.component';


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
    PageTopComponent,
    ProjectsComponent,
    AboutCardComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
