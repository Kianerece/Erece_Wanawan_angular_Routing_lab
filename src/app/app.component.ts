import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Make it standalone
  imports: [RouterLink, RouterOutlet,RouterLink,RouterLinkActive],  // Import RouterLink and RouterOutlet
  templateUrl: './app.component.html',  // Make sure the path is correct
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing-lab';
}