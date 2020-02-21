import {Component, OnInit} from '@angular/core';
import {RandomArrayGenerator} from '../../shared/utils/random.array.generator';
import {Bar} from '../../shared/models/bar';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent implements OnInit {

  bars: Bar[];
  sorted = false;

  constructor() {
  }

  ngOnInit(): void {
    this.bars = RandomArrayGenerator.arrayOfLength(128);
  }

  startSort(): void {
    this.quickSort().then(() => this.sorted = true);
  }

  async quickSort(begin: number = 0, end: number = this.bars.length - 1): Promise<void> {
    if (!this.bars) {
      return;
    }
    if (begin >= end) {
      return;
    }

    let i = begin;
    let j = end;

    const pivotIndex = Math.floor(begin + (end - begin) / 2);
    this.bars[pivotIndex].current = true;
    const pivot = this.bars[pivotIndex].value;
    await this.delay(100);

    while (i <= j) {
      while (this.bars[i].value < pivot) {
        this.bars[i].checked = true;
        await this.delay(100);
        this.bars[i].checked = false;
        i++;
      }
      while (this.bars[j].value > pivot) {
        this.bars[j].checked = true;
        await this.delay(100);
        this.bars[j].checked = false;
        j--;
      }
      if (i <= j) {
        await this.exchangeNumbers(i, j);
        i++;
        j--;
      }
    }
    const currentBar = this.bars.find((b) => b.current);
    if (currentBar) {
      currentBar.current = false;
    }
    if (begin < j) {
      this.quickSort(begin, j);
    }
    if (i < end) {
      this.quickSort(i, end);
    }
  }

  async exchangeNumbers(i: number, j: number): Promise<void> {
    this.bars[i].selected = true;
    this.bars[j].selected = true;
    await this.delay(250);
    const temp = this.bars[i];
    this.bars[i] = this.bars[j];
    this.bars[j] = temp;
    await this.delay(250);
    this.bars[i].selected = false;
    this.bars[j].selected = false;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
