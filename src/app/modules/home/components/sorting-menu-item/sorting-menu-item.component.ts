import {Component, OnInit} from '@angular/core';
import {Bar} from '@models/bar';
import {RandomArrayGenerator} from '@utils/random.array.generator';

@Component({
  selector: 'app-sorting-menu-item',
  templateUrl: './sorting-menu-item.component.html',
  styleUrls: ['./sorting-menu-item.component.scss']
})
export class SortingMenuItemComponent implements OnInit {

  bars: Bar[];

  private canSort = true;

  constructor() {
  }

  ngOnInit(): void {
    this.bars = [
      {value: 35, current: false, visited: false, selected: false},
      {value: 58, current: false, visited: false, selected: false},
      {value: 79, current: false, visited: false, selected: false},
      {value: 22, current: false, visited: false, selected: false},
      {value: 16, current: false, visited: false, selected: false},
    ];
  }

  async sort(): Promise<void> {
    if (this.canSort) {
      this.canSort = false;
      await this.swap(0, 4);
      await this.swap(1, 3);
      await this.swap(2, 3);
      await this.swap(3, 4);
      await this.swap(2, 3);
      await this.delay(3000);
      this.reset();
      this.canSort = true;
    }
  }

  private async swap(i: number, j: number) {
    this.bars[i].selected = true;
    this.bars[j].selected = true;
    await this.delay(200);
    const temp = this.bars[i];
    this.bars[i] = this.bars[j];
    this.bars[j] = temp;
    this.bars[i].selected = false;
    this.bars[j].selected = false;
  }


  private reset(): void {
    this.bars = [
      {value: 35, current: false, visited: false, selected: false},
      {value: 58, current: false, visited: false, selected: false},
      {value: 79, current: false, visited: false, selected: false},
      {value: 22, current: false, visited: false, selected: false},
      {value: 16, current: false, visited: false, selected: false},
    ];
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
