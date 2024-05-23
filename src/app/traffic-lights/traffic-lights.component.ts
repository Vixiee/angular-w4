import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-lights',
  standalone: true,
  imports: [],
  templateUrl: './traffic-lights.component.html',
  styleUrl: './traffic-lights.component.css',
})
export class TrafficLightsComponent implements OnInit {
  color: string = 'red';
  crossButtonDisabled: boolean = false;

  constructor() {}

  ngOnInit() {
    this.color = 'red';
    if (this.color === 'red)') {
      this.crossButtonDisabled = true;
    } else {
      this.crossButtonDisabled = false;
    }
  }

  clickButton() {
    if (this.color === 'yellow') {
      alert("Stop ittt! This won't end well!");
    }
  }
}
