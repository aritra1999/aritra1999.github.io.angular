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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarSmallComponent,
    ProfileDropdownComponent,
    LeftbarComponent,
    EmailListComponent,
    EmailBodyComponent,
    EmailTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
