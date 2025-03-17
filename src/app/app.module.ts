import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Child1Component } from './about/child-1/child-1.component';
import { Child2Component } from './about/child-2/child-2.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    importProvidersFrom(HomeComponent, AboutComponent, ContactComponent, Child1Component, Child2Component)
  ]
})
export class AppModule { }

bootstrapApplication(AppComponent);
