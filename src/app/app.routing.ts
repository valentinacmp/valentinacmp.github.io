import { ModuleWithProviders } from '@angular/core';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

import { HomeComponent } from './components/home/home.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'new-project', component: NewProjectComponent},
  {path: 'qualification', component: QualificationComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

export class AppRoutingModule {}
