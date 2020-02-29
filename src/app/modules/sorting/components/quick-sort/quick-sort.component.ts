import {Component} from '@angular/core';
import {SorterComponent} from '@sorting/components/sorter/sorter.component';
import {SortingService} from '@services/sorting.service';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent extends SorterComponent {

  constructor(private service: SortingService) {
    super(service);
  }

  updateArrayLength(len: number) {
    this.service.setArrayLength(len);
  }

  sort() {
    this.quickSort();
  }

  /**
   * This function takes last element as pivot,
   * places the pivot element at its correct
   * position in sorted array, and places all
   * smaller (smaller than pivot) to left of
   * pivot and all greater elements to right
   * of pivot.
   */
  async partition(begin: number, end: number) {
    await this.checkPaused();
    const pivot = this.bars[end].value;
    let i = (begin - 1);

    for (let j = begin; j < end; j++) {
      await this.checkPaused();
      this.bars[j].visited = true;
      await this.mDelay();
      await this.checkPaused();
      /**
       * If current element is smaller than the pivot
       */
      if (this.bars[j].value < pivot) {
        i++;
        this.bars[j].visited = false;

        /**
         * swap bars[i] and bars[j]
         */
        await this.swap(i, j);
      } else {
        this.bars[j].visited = false;
      }
    }
    /**
     * swap bars[i+1] and bars[end] (pivot)
     */
    await this.swap(i + 1, end);
    return i + 1;
  }

  /**
   * This function is responsible of
   * swapping 2 elements at specified
   * indexes.
   */
  async swap(i: number, j: number): Promise<void> {
    if (i !== j) {
      this.bars[i].selected = true;
      this.bars[j].selected = true;
      await this.checkPaused();
      await this.sDelay();
      await this.checkPaused();
      const temp = this.bars[i];
      this.bars[i] = this.bars[j];
      this.bars[j] = temp;
      await this.checkPaused();
      await this.sDelay();
      await this.checkPaused();
      this.bars[i].selected = false;
      this.bars[j].selected = false;
    }
  }

  /**
   * This is the main function that sorts
   * our bar array using the quick sort method.
   */
  async quickSort(begin: number = 0, end: number = this.bars.length - 1) {
    this.sorting = true;
    if (begin < end) {
      /**
       * pivot is the partitioning index,
       * this.bars[pivot] is at the right
       * index now.
       */
      this.bars[end].current = true;
      const pivot = await this.partition(begin, end);
      this.bars[pivot].current = false;

      /**
       * Recursively sort elements before
       * partition and after partition.
       */
      this.quickSort(begin, pivot - 1);
      this.quickSort(pivot + 1, end);
    }
    const currentBar = this.bars.find((b) => b.current);
    if (!currentBar) {
      this.sorting = false;
    }
  }
}
