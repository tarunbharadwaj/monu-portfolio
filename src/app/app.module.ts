import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AsyncPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { EducationSectionComponent } from './education-section/education-section.component';
import { TypeWritterService } from '../services/type-writter.service';
import { NgxTypedWriterModule } from 'ngx-typed-writer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    EducationSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsyncPipe,
    NgxTypedWriterModule
  ],
  providers: [
    provideClientHydration(),
    TypeWritterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
