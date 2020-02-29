import {Bar} from '@models/bar';

export class RandomArrayGenerator {
  static arrayOfLength(length: number): number[] {
    return Array.from({length}, () => Math.floor(Math.random() * 100) + 1);
  }
}
