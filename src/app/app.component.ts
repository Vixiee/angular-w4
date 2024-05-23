import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightsComponent } from './traffic-lights/traffic-lights.component';
import { crosspointComponent } from './crosspoint/crosspoint.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightsComponent, crosspointComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-w4-crossroad';
}
