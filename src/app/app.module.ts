import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ErrorComponent } from './components/error/error.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule, appRoutingProviders, routing } from './app.routing';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    NewProjectComponent,
    QualificationComponent,
    ContactComponent,
    SkillsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    RouterModule,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
