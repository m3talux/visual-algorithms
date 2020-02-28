import {Bar} from '@models/bar';

export class RandomArrayGenerator {
  static arrayOfLength(length: number): Bar[] {
    return Array.from({length}, () => new Bar(Math.floor(Math.random() * 100) + 1, false, false, false));
  }
}
