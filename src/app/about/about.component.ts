import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,  // Make it standalone
  imports: [RouterLink, RouterOutlet],  // Import RouterLink and RouterOutlet
  templateUrl: './about.component.html',  // Link to the About component's template
  styleUrls: ['./about.component.css']  // Link to the About component's styles
})
export class AboutComponent {
  // Any properties or methods specific to the About component
}