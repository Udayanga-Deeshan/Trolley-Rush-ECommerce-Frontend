import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common/header/header.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DashboardComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-Angular-app';
}
