import {Component, OnInit} from '@angular/core';
import {RandomArrayGenerator} from '../../shared/utils/random.array.generator';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent implements OnInit {

  bars: number[];

  constructor() {
  }

  ngOnInit(): void {
    this.bars = RandomArrayGenerator.arrayOfLength(64);
  }

}
