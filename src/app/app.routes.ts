import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './about/profile/profile.component';
import { Child1Component } from './about/child-1/child-1.component';
import { Child2Component } from './about/child-2/child-2.component';

export const routes: Routes = [
    {path: 'about', component: AboutComponent,children: [
        {
            path: 'child-one',
            component: Child1Component
            },
            {
            path: 'child-two',
            component: Child2Component
            },
            {
            path: '',
            redirectTo: 'child-one',
            pathMatch: 'full'
            }
            
    ]},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent}
];