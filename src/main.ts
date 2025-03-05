import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Import the appConfig
import { AppComponent } from './app/app.component';  // Import the standalone AppComponent

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));