import {Component, OnDestroy, OnInit} from '@angular/core';
import {SortingService} from '@services/sorting.service';
import {Bar} from '@models/bar';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {RandomArrayGenerator} from '@utils/random.array.generator';

@Component({
  selector: 'app-sorter',
  template: ``,
  styleUrls: ['./sorter.component.scss']
})
export class SorterComponent implements OnInit, OnDestroy {
  arrayLength: number;
  bars: Bar[];
  sorting: boolean;
  paused: boolean;
  speed: number;
  private $onDestroy = new Subject<void>();
  private normalDelay = 50;
  private slowDelay = 100;

  constructor(private sortingService: SortingService) {
  }

  ngOnInit(): void {
    this.sortingService.getArrayLengthSubject()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((len) => {
        this.generateArray(len);
      });
    this.sortingService.getSortingSubject()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((sorting) => this.sorting = sorting);
    this.sortingService.getPausedSubject()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((paused) => this.paused = paused);
    this.sortingService.getSpeedSubject()
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((speed) => this.speed = speed);

  }

  ngOnDestroy(): void {
    this.$onDestroy.next();
  }

  private generateArray(len: number): void {
    this.arrayLength = len;
    const array = RandomArrayGenerator.arrayOfLength(len);
    this.bars = array.map((num) => new Bar(num, false, false, false));
  }

  startSorting() {
    if (!this.sorting && !this.paused) {
      this.sort();
    } else if (this.paused) {
      this.sortingService.setPausedStatus(false);
    }
  }

  sort() {
  }

  mDelay() {
    return new Promise(resolve => setTimeout(resolve, this.speed * this.normalDelay));
  }

  sDelay() {
    return new Promise(resolve => setTimeout(resolve, this.speed * this.slowDelay));
  }

  pauseSorting(): void {
    if (!this.paused) {
      this.sortingService.setPausedStatus(true);
    }
  }

  speedChange(value: number) {
    this.sortingService.setSpeed(value);
  }

  async checkPaused() {
    if (this.paused) {
      await this.mDelay().then(() => this.checkPaused());
    } else {
      return;
    }
  }
}
