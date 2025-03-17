import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';
import { Child1Component } from './about/child-1/child-1.component';
import { Child2Component } from './about/child-2/child-2.component';

 const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'about', component: AboutComponent, children: 
   [{path: 'profile', component: ProfileComponent}, 
  {
    path: 'child-1', // Path for the first child route (relative to 'parent')
  component: Child1Component // Component for the first child route
  },
  {
    path: 'child-2', // Path for the second child route (relative to'profile')
    component: Child2Component // Component for the second child route
    },
    {
      path: '', // Default child route (when only '/parent' is accessed)
      redirectTo: 'child-1', // Redirect to 'child-one' by default
      pathMatch: 'full' // Match the full path to redirect correctly
      }
  ]
   },
   {
    path: '',
    redirectTo: '/about', // Redirect to '/parent' as the default route
    pathMatch: 'full'
    },
   { path: 'contact', component: ContactComponent },
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }