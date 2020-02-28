import {Component, EventEmitter, OnInit, Output} from '@angular/core';

interface Speed {
  value: number;
  name: string;
}

@Component({
  selector: 'app-speed-selector',
  templateUrl: './speed-selector.component.html',
  styleUrls: ['./speed-selector.component.scss']
})
export class SpeedSelectorComponent implements OnInit {

  index: number;
  speeds: Speed[];

  @Output()
  valueChanged = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.speeds = [
      {value: 4, name: '0.25x'},
      {value: 2, name: '0.5x'},
      {value: 1, name: '1x'},
      {value: 0.5, name: '2x'},
      {value: 0.2, name: '5x'},
      {value: 0.1, name: '10x'}
    ];
    this.index = 2;
  }

  speedUp() {
    if (this.index < this.speeds.length - 1) {
      this.index++;
      this.valueChanged.emit(this.speeds[this.index].value);
    }
  }

  slowDown() {
    if (this.index > 0) {
      this.index--;
      this.valueChanged.emit(this.speeds[this.index].value);
    }
  }

}
