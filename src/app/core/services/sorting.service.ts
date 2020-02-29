import {Inject} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Inject({provideIn: 'root'})
export class SortingService {
  private $arrayLength = new BehaviorSubject<number>(64);
  private $sorting = new BehaviorSubject<boolean>(false);
  private $paused = new BehaviorSubject<boolean>(false);
  private $speed = new BehaviorSubject<number>(1);

  constructor() {
  }

  setArrayLength(length: number): void {
    this.$arrayLength.next(length);
  }

  getArrayLengthSubject(): Observable<number> {
    return this.$arrayLength.asObservable();
  }

  setSortingStatus(status: boolean): void {
    this.$sorting.next(status);
  }

  getSortingSubject(): Observable<boolean> {
    return this.$sorting.asObservable();
  }

  setPausedStatus(status: boolean): void {
    this.$paused.next(status);
  }

  getPausedSubject(): Observable<boolean> {
    return this.$paused.asObservable();
  }

  setSpeed(speed: number): void {
    this.$speed.next(speed);
  }

  getSpeedSubject(): Observable<number> {
    return this.$speed.asObservable();
  }
}
