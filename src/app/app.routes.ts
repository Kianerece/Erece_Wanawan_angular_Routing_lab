import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';
import { Profile2Component } from './about/profile2/profile2.component';


export const routes: Routes = [
    {path: 'about', component: AboutComponent, children:[{path:'profile',component:ProfileComponent}]},
    {path: 'contact', component: ContactComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'admin',component: AboutComponent, canActivate:[AdminGuard],children:[
        {path:'profile-user', component: ProfileComponent},
        {path:'profile-admin', component: Profile2Component}
    ]},
    {path:',', redirectTo:'/about',pathMatch:'full'}
];