import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss']
})
export class SortingComponent implements OnInit {

  menus = [
    {name: 'Bubble Sort', page: ''},
    {name: 'Selection Sort', page: ''},
    {name: 'Insertion Sort', page: ''},
    {name: 'Shell Sort', page: ''},
    {name: 'Merge Sort', page: ''},
    {name: 'Quick Sort v1', page: 'quick-sort'},
    {name: 'Quick Sort v2', page: ''},
    {name: 'Counting Sort', page: ''},
    {name: 'Radix Sort', page: ''},
    {name: 'Stable Counting Sort', page: ''},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
