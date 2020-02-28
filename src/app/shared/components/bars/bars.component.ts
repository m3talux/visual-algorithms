import {Component, Input, OnInit} from '@angular/core';
import {Bar} from '@models/bar';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  @Input()
  bars: Bar[];

  @Input()
  height: number;

  @Input()
  width: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
