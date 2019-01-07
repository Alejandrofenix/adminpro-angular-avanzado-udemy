import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 // Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebardComponent } from './shared/sidebard/sidebard.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    DashbordComponent,
    ProgressComponent,
    Graficas1Component,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebardComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
