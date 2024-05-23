import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TrafficLightsComponent } from '../traffic-lights/traffic-lights.component';
@Component({
  selector: 'app-crosspoint',
  standalone: true,
  templateUrl: './crosspoint.component.html',
  styleUrl: './crosspoint.component.css',
  imports: [TrafficLightsComponent],
})
export class crosspointComponent implements AfterViewInit {
  [key: string]: any;
  @ViewChild('north') northLight: TrafficLightsComponent | any;
  @ViewChild('south') southLight: TrafficLightsComponent | any;
  @ViewChild('east') eastLight: TrafficLightsComponent | any;
  @ViewChild('west') westLight: TrafficLightsComponent | any;

  ngAfterViewInit() {
    this.startTrafficLightsSequence();
  }

  startTrafficLightsSequence() {
    this.northLight.color = 'red';
    this.southLight.color = 'red';
    this.eastLight.color = 'green';
    this.westLight.color = 'green';

    setTimeout(() => {
      if (this.panicMode) {
        return;
      }

      this.northLight.color = 'yellow';
      this.southLight.color = 'yellow';
      this.eastLight.color = 'yellow';
      this.westLight.color = 'yellow';
      setTimeout(() => {
        this.northLight.color = 'green';
        this.southLight.color = 'green';
        this.eastLight.color = 'red';
        this.westLight.color = 'red';
        setTimeout(() => {
          this.northLight.color = 'yellow';
          this.southLight.color = 'yellow';
          this.eastLight.color = 'yellow';
          this.westLight.color = 'yellow';

          setTimeout(() => {
            this.startTrafficLightsSequence();
          }, 2000);
        }, 5000);
      }, 2000);
    }, 5000);
  }

  panicMode = false;

  startPanicMode() {
    if (this.panicMode) {
      return;
    }

    this.panicMode = true;
    let blink = false;

    const intervalId = setInterval(() => {
      blink = !blink;
      const color = blink ? 'yellow' : 'off';

      this.northLight.color = color;
      this.southLight.color = color;
      this.eastLight.color = color;
      this.westLight.color = color;
    }, 500);

    setTimeout(() => {
      clearInterval(intervalId);

      setTimeout(() => {
        this.panicMode = false;
        this.startTrafficLightsSequence();
      }, 10000);
    }, 10000);
  }
}
