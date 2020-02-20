import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  @Input()
  bars: number[];

  @Input()
  height: number;

  @Input()
  width: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
